import { getPostData, getRelatedPosts } from '../getPosts';
import PostCard from '../post-card';

const RelatedArticles = async ({
  tags,
  title,
}: {
  tags: string[];
  title: string;
}) => {
  //   const posts = await getRelatedPosts(tags);
  const posts = await getRelatedPosts(tags, title);
  if (!tags || !Array.isArray(tags) || tags.length === 0) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-900">
        <div className="container mx-auto text-center text-white">
          <p>No related articles found.</p>
          {/* You can add a message here or render nothing */}
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-900">
      <header className="w-full bg-gray-800 py-8 mb-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white px-6 py-3 inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg">
            Related Posts
          </h1>
          <h2>{tags.map((tag) => tag + '')}</h2>
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

export default RelatedArticles;
