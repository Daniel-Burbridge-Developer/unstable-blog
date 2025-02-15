import type { Metadata } from 'next';
import RelatedArticles from './related-articles-section';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, ' '), // Format the title
    description: `Read about ${slug.replace(/-/g, ' ')} on Unstable Blog.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post, ...metadata } = await import(`@/posts/${slug}.mdx`);

  return (
    <div>
      <Post />
      <RelatedArticles tags={metadata.tags} title={metadata.title} />
    </div>
  );
}

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

export const dynamicParams = false;
