import Image from '@component/atoms/image';
import Text from '@component/atoms/text';
import { FC } from 'react';
import AccordionItemProps from './types';
import Hexagon from '../hexagon';

const AccordionItem: FC<AccordionItemProps> = ({
  title,
  content,
  icon,
  active,
  id,
  onClick,
}) => {
  return (
    <div
      className={`cursor-pointer grid grid-cols-8 w-full gap-0  md:mb-[2rem] lg:mb-[3rem] border-b-solid border-b-grey-100 border-b-[1px]  transition-all duration-250 ease-out ${
        active ? 'pb-[2rem]' : 'lg:pb-[3rem] md:pb-[2rem]'
      } `}
      onClick={() => onClick(id)}
    >
      <div className="max-md:ml-[-40px] col-span-1 md:col-span-2 relative">
        <Hexagon icon={icon} active={active} />
      </div>
      <div className="max-md:ml-[20px] max-md:py-[10px] col-span-7 md:col-span-6 transition-all duration-250 ease-out">
        <div className="flex justify-between items-center transition-all duration-250 ease-out">
          <Text
            variant="p1"
            className="text-white max-md:flex max-md:items-center min-h-[54px]"
          >
            {title}
          </Text>
          <Image
            width={12}
            height={6}
            src="/images/caret.png"
            alt="caret"
            className={`h-[6px] w-[12px] rotate-${180}`}
          />
        </div>
        {active && (
          <Text
            variant="p2"
            className="text-white fontFamily-satoshi-medium leading-[115%] max-md:mt-0 mt-[15px]"
          >
            {content}
          </Text>
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
