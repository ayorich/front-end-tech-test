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
      className={`cursor-pointer grid grid-cols-8 w-full gap-0 mb-[3rem] border-b-solid border-b-grey-100 border-b-[1px]  transition-all duration-250 ease-out ${
        active ? 'pb-[3rem]' : 'pb-[4.5rem]'
      } `}
      onClick={() => onClick(id)}
    >
      <div className="col-span-2 relative">
        <Hexagon icon={icon} active={active} />
      </div>
      <div className="col-span-6 transition-all duration-250 ease-out">
        <div className="flex justify-between items-center transition-all duration-250 ease-out">
          <Text variant="p1" className="text-white">
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
            className="text-white fontFamily-satoshi-medium leading-[115%] mt-[15px]"
          >
            {content}
          </Text>
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
