import type { Metadata } from 'next';
import RelatedArticles from './related-articles-section';

interface PageProps {
  params: { slug: string };
}

// Ensure generateMetadata correctly types its params
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: params.slug.replace(/-/g, ' '),
    description: `Read about ${params.slug.replace(/-/g, ' ')} on Unstable Blog.`,
  };
}

// Page Component (Now an async function but with explicitly defined props)
export default async function Page({ params }: { params: { slug: string } }) {
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

// Generates static paths for the blog
export function generateStaticParams() {
  return [
    { slug: 'unstable-blog-mock' },
    { slug: 'design-mock' },
    { slug: 'ditching-rawloader-mock' },
    { slug: 'debugging-mdx-mock' },
    { slug: 'magic-mdx-mock' },
    { slug: 'optimised-performance-mock' },
    { slug: 'static-generation-mock' },
  ];
}

// Disable dynamic params for purely static generation
export const dynamicParams = false;
