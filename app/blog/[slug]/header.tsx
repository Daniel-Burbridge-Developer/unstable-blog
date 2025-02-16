import { StaticImageData } from 'next/image';
import Image from 'next/image';
import placeholderImage from '@/posts/post-placeholder.webp';

const BlogImageHeader = ({
  image,
  title,
}: {
  image?: StaticImageData;
  title: string;
}) => {
  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden my-6">
      <Image
        src={image || placeholderImage}
        alt={`Cover image for ${title}`}
        layout="fill"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};

export default BlogImageHeader;
