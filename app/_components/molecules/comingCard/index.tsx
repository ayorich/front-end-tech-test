import Image from '@component/atoms/image';
import Text from '@component/atoms/text';
import { FC } from 'react';
import ComingCardProps from './types';

const ComingCard: FC<ComingCardProps> = ({ title, subTitle, content }) => {
  return (
    <div className="bg-grey-100 rounded-[6px] py-6 cursor-pointer relative h-[87vh]">
      <Text className="absolute top-[-10px] right-8 rounded-[100px] px-[10px] py-[2px] justify-center  uppercase flex text-black bg-white text-[12px] fontFamily-satoshi-bold">
        Coming soon
      </Text>
      <div className="w-[90%] mx-auto mb-6">
        <Text variant="h3" className="text-white uppercase mb-4">
          {title}
        </Text>
        <Text
          variant="p1"
          className={`fontFamily-satoshi-bold ${gradientClass} min-h-[58px]`}
        >
          {subTitle}
        </Text>
      </div>

      <div className="overflow-hidden w-[95%] my-4 transition-all duration-250 ease-out">
        <div className="hover:scale-[115%] relative before:w-full before:absolute before:left-0 before:bottom-0 before:top-0  before:bg-gradient-to-b before:from-purple before:to-blue before:mix-blend-color">
          <Image
            src="/images/token.png"
            alt="content-blog"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
      <div className="w-[90%] mx-auto mb-4">
        <Text variant="p2" className="fontFamily-satoshi-meduim text-white">
          {content}
        </Text>
      </div>
    </div>
  );
};

const gradientClass = `text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple`;

export default ComingCard;
