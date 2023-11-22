import { FC } from 'react';
import Image from '@component/atoms/image';
import Text from '@component/atoms/text';
import Accordion from '@component/molecules/accordion';
import SectionTemplate from '@component/templates/sectionTemplates';

const OurMission: FC<{ className?: string }> = ({ className }) => {
  return (
    <SectionTemplate className={className}>
      <Text
        variant="h3"
        className="lg:hidden 3xl:hidden text-white uppercase mb-[4rem]"
      >
        our mission is to provide unique, confidential AI-based tools, to which
        you will gain
        <Text className={`${gradientClass} ml-2`}>
          lifetime access through NFT tokens and our CREON token.
        </Text>
      </Text>

      <div className="grid  md:grid-cols-6 lg:grid-cols-2 w-full lg:gap-12 3xl:gap-6 my-8">
        <div className="relative md:flex md:items-end md:order-2 lg:block lg:order-1  md:col-span-2 lg:col-span-1">
          <Text
            variant="h3"
            className="max-lg:hidden 3xl:hidden text-white uppercase"
          >
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

          <div className="max-md:mt-[-4.5rem] max-md:w-[100vw] max-md:h-[200px] md:scale-[250%] lg:scale-[100%] lg:top-[-2rem] 3xl:mt-8 3xl:mr-[-2rem] relative 3xl:right-[-10rem]">
            <Image
              alt="our mission"
              src="/images/ourmission.png"
              height={502}
              width={836}
              className="max-md:h-full max-md:w-full"
            />
          </div>
        </div>
        <div className="md:order-1 lg:order-2 col-span-6 md:col-span-4 lg:col-span-1">
          <Accordion />
        </div>
      </div>
    </SectionTemplate>
  );
};

const gradientClass = `text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple`;

export default OurMission;
