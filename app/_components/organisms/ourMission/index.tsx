import Image from '@component/atoms/image';
import Text from '@component/atoms/text';
import SectionTemplate from '@component/templates/sectionTemplates';
import { FC } from 'react';

const OurMission: FC = ({}) => {
  return (
    <SectionTemplate>
      <div className="grid grid-cols-2 w-full gap-6 my-8">
        <div className="col-span-1">
          <Text variant="h3" className="3xl:hidden text-white uppercase">
            our mission is to provide unique, confidential AI-based tools, to
            which you will gain
            <Text className={`${gradientClass} ml-2`}>
              lifetime access through NFT tokens and our CREON token.
            </Text>
          </Text>

          {/* larger screen */}
          <Text variant="h3" className="max-3xl:hidden text-white uppercase">
            Our vision is to support the innovation of AI blockchain projects
            <Text className={`${gradientClass} ml-2`}>
              while prioritizing communities and democratizing profits
            </Text>
          </Text>
          {/* larger screen */}

          <div className="lg:top-[-2rem] 3xl:mt-8 3xl:mr-[-2rem] relative 3xl:right-[-10rem]">
            <Image
              alt="our mission"
              src="/images/ourmission.png"
              height={502}
              width={836}
            />
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </SectionTemplate>
  );
};

const gradientClass = `text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple`;

export default OurMission;
