// Import necessary modules
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  // 1. Fetch MDX content (replace with your actual fetch logic)
  const apiUrl = `https://your-api-endpoint.com/posts/${slug}`; // Example API endpoint
  const response = await fetch(apiUrl);

  if (!response.ok) {
    // Handle errors (e.g., 404, network issues)
    return <div>Error: Could not fetch post</div>;
  }

  const mdxContent = await response.text(); // Assuming the API returns the MDX content as text

  // 2. Serialize the MDX content
  const mdxSource = await serialize(mdxContent, {
    // Optional: Add any remark/rehype plugins here
    mdxOptions: {
      // Add any MDX options here
    },
  });

  // 3. Render the MDX component
  return (
    <article>
      <MDXRemote {...mdxSource} />
    </article>
  );
}

export async function generateStaticParams() {
  // Fetch the list of slugs from your remote source
  const apiUrl = 'https://your-api-endpoint.com/posts'; // Example API endpoint
  const response = await fetch(apiUrl);

  if (!response.ok) {
    // Handle errors
    return []; // Or throw an error
  }

  const posts = await response.json(); // Assuming the API returns an array of post objects with a 'slug' property

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
