import Image from 'next/image';
import placeholderImage from '@/posts/unstableplaceholder.webp';

const PostCard = ({
  title,
  date,
  author,
  description,
  tags,
}: {
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
}) => {
  return (
    <div className="flex w-full h-full my-4 border border-gray-500 hover:border-yellow-500 rounded-lg p-4 bg-gray-900 shadow-md">
      {/* Left Side: Fixed Image */}
      <div className="w-36 h-36 relative flex-shrink-0">
        <Image
          src={placeholderImage}
          alt="Card Image"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Right Side: Content */}
      <div className="ml-4 flex flex-col justify-between w-full">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-400">
          {date} by {author}
        </p>

        {/* Truncate Description */}
        <p className="text-gray-300 mt-1 line-clamp-2 overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
