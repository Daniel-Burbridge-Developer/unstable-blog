export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const { default: Post, ...metadata } = await import(`@/posts/${slug}.mdx`)

 
  return (
  <article>
    <Post />
  </article>)
}
 
export function generateStaticParams() {
  return [{ slug: 'unstable-blog-test' }]
}
 
export const dynamicParams = false