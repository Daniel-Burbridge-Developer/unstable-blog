export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const { default: Post } = await import(`@/posts/${slug}.mdx`)
 
  return <Post />
}
 
export function generateStaticParams() {
  return [{ slug: 'sample-interactive' }, { slug: 'sample-static' }]
}
 
export const dynamicParams = false