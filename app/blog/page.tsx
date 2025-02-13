import { getPostData } from './getPosts';
import PostCard from './postCard';

const Blog = async () => {
  const posts = await getPostData();
  return (
    <div className="flex w-1/2 m-auto flex-col gap-4 min-h-screen justify-center items-center">
      {posts.map((post) => (
        <div key={post?.slug} className="w-full max-w-[600px] h-[180px] flex">
          {post && post.metadata ? (
            <PostCard slug={post.slug} {...post.metadata} />
          ) : (
            'unable to locate card'
          )}
        </div>
      ))}
    </div>
  );
};

export default Blog;
