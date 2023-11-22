import Image from '@component/atoms/image';
import Text from '@component/atoms/text';
import { FC } from 'react';
import BlogCardProps from './types';

const BlogCard: FC<BlogCardProps> = ({ title, content, src }) => {
  return (
    <div className="max-md:w-[75vw] grid grid-cols-3 w-full gap-6 my-8 bg-grey-100 bg-opacity-40 rounded-[6px] overflow-hidden">
      <div className="max-md:w-[90%] max-md:mx-auto max-md:mb-[20px] max-sm:order-2 col-span-3 md:col-span-2 md:p-4 lg:p-8">
        <Text variant="h3" className="text-white mb-4 uppercase">
          {title}
        </Text>
        <Text variant="p2" className="text-white">
          {content}
        </Text>
      </div>
      <div className="max-sm:order-1 col-span-3 md:col-span-1">
        <div className=" h-full relative before:w-full before:absolute before:left-0 before:bottom-0 before:top-0  before:bg-gradient-to-b before:from-purple before:to-blue before:mix-blend-color">
          <Image
            src={src}
            alt="blog-image"
            width={453}
            height={302}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

const gradientClass = `text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple`;

export default BlogCard;
