import Image from 'next/image';
import Link from 'next/link';
import type { StaticImageData } from 'next/image';
import placeholderImage from '@/posts/post-placeholder.webp';

interface PostCardProps {
  title: string;
  date: string;
  author: string;
  description: string;
  slug: string;
  tags: string[];
  image?: StaticImageData | string;
}

const PostCard = ({
  title,
  date,
  author,
  description,
  slug,
  tags,
  image,
}: PostCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex flex-col sm:flex-row w-full border border-gray-700 hover:border-purple-500 rounded-lg p-6 bg-gray-800 shadow-lg transition-all duration-300 gap-6 group"
    >
      <div className="relative min-w-56 w-full sm:w-[240px] h-[180px] sm:h-[240px] rounded-md overflow-hidden">
        <Image
          src={image || placeholderImage}
          alt={`Cover image for ${title}`}
          fill
          sizes="(max-width: 640px) 100vw, 240px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-sm text-gray-400 mb-3">
            {date} by {author}
          </p>
          <p className="text-gray-300 line-clamp-3 overflow-hidden text-ellipsis mb-4 hidden sm:block ">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
