import Image from '@component/atoms/image';
import Text from '@component/atoms/text';
import SectionTemplate from '@component/templates/sectionTemplates';
import { FC } from 'react';

const Footer: FC = ({}) => {
  return (
    <div className="max-md:items-center max-md:flex-col flex justify-between my-[1rem] w-[90%] 3xl:w-[70%] mx-auto">
      <div className=" max-md:mb-4">
        <Text variant="p2" className="text-[16px] text-white">
          © Creon 2023. All rights reserved.
        </Text>
      </div>
      <div className="flex items-center max-md:mb-4">
        <Text variant="p2" className="text-[16px] text-white mr-[3px]">
          Powered by
        </Text>
        <Text variant="h4" className="text-[18px] uppercase text-white ">
          NIFTABLES
        </Text>
      </div>
    </div>
  );
};

export default Footer;
