// utils/mdxUtils.js
import fs from 'fs/promises';
import path from 'path';

export async function getPostFileNames() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = await fs.readdir(postsDirectory);

  return filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => filename.replace(/\.mdx$/, '')); // Return only slugs
}

export async function getPostData() {
  const slugs = await getPostFileNames();

  const postsData = await Promise.all(
    slugs.map(async (slug) => {
      try {
        const { default: Component, ...metadata } = await import(
          `@/posts/${slug}.mdx`
        );

        return {
          slug,
          metadata,
          Component, // Include the component if you need it
        };
      } catch (error) {
        console.error(`Error importing MDX file ${slug}.mdx:`, error);
        return null; // Or handle the error as needed (e.g., return a default object)
      }
    })
  );

  // Filter out any null values (files that failed to import)
  return postsData.filter(Boolean);
}

export async function getRelatedPosts(tags: string[], title: string) {
  const postsData = await getPostData();

  const prunedPostData = postsData.filter((post) => {
    return post ? post.metadata.title != title : null;
  });

  // Filter posts that have at least one tag in common
  const relatedPosts = prunedPostData.filter((post) => {
    return post
      ? post.metadata.tags.some((tag: string) => tags.includes(tag))
      : null;
  });

  // Sort posts by the number of tags in common
  relatedPosts.sort((a, b) => {
    const aCommonTags = a?.metadata.tags.filter((tag: string) =>
      tags.includes(tag)
    ).length;
    const bCommonTags = b?.metadata.tags.filter((tag: string) =>
      tags.includes(tag)
    ).length;
    return bCommonTags - aCommonTags;
  });

  // Return the top 4 results (or less if less than 4 results)
  return relatedPosts.slice(0, 4);
}
