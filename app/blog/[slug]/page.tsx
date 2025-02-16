import type { Metadata } from 'next';
import RelatedArticles from './related-articles-section';
import BlogImageHeader from './header';

// Update generateMetadata to await the params promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: resolvedParams.slug.replace(/-/g, ' '),
    description: `Read about ${resolvedParams.slug.replace(/-/g, ' ')} on Unstable Blog.`,
  };
}

// Update the page component similarly
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { default: Post, ...metadata } = await import(`@/posts/${slug}.mdx`);
    return (
      <div>
        <BlogImageHeader image={metadata.image} title={metadata.title} />
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

export function generateStaticParams() {
  return [{ slug: 'unstable-blog' }];
}

// Disable dynamic params for purely static generation
export const dynamicParams = false;
