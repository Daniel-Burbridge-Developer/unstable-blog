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
