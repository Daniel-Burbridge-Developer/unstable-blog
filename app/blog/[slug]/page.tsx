import type { Metadata } from 'next';
import RelatedArticles from './related-articles-section';

interface PageProps {
  params: { slug: string };
}

// Generate metadata dynamically based on the slug
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params;
  return {
    title: slug.replace(/-/g, ' '), // Format title for better readability
    description: `Read about ${slug.replace(/-/g, ' ')} on Unstable Blog.`,
  };
}

// Page Component
export default async function Page({ params }: PageProps) {
  const { slug } = params;

  try {
    const { default: Post, ...metadata } = await import(`@/posts/${slug}.mdx`);

    return (
      <div>
        <Post />
        <RelatedArticles
          tags={metadata.tags || []}
          title={metadata.title || ''}
        />
      </div>
    );
  } catch (error) {
    console.error(`Error loading MDX file for slug: ${slug}`, error);
    return <div>Post not found.</div>;
  }
}

// Generate static paths for the blog
export function generateStaticParams() {
  const params = [
    { slug: 'unstable-blog-mock' },
    { slug: 'design-mock' },
    { slug: 'ditching-rawloader-mock' },
    { slug: 'debugging-mdx-mock' },
    { slug: 'magic-mdx-mock' },
    { slug: 'optimised-performance-mock' },
    { slug: 'static-generation-mock' },
  ];

  console.log('Generating static params:', params);
  return params;
}

// Disable dynamic params to only allow pre-generated pages
export const dynamicParams = false;
