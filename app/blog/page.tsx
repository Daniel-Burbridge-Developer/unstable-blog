import { getPostData } from './getPosts';
import PostCard from './post-card';

const Blog = async () => {
  const posts = await getPostData();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-900">
      <header className="w-full bg-transparent py-8 mb-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white px-6 py-3 inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg">
            Unstable Blog
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-8">
          {posts.map((post) =>
            post && post.metadata ? (
              <PostCard key={post.slug} slug={post.slug} {...post.metadata} />
            ) : (
              <div
                key={post?.slug}
                className="bg-red-900 border border-red-700 text-red-100 px-4 py-3 rounded-lg relative"
              >
                Unable to locate card
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default Blog;
