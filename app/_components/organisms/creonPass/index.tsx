import Button from '@component/atoms/button';
import Text from '@component/atoms/text';
import SectionTemplate from '@component/templates/sectionTemplates';
import { FC } from 'react';

const CreonPass: FC<{ className?: string }> = ({ className }) => {
  return (
    <SectionTemplate className={className}>
      <div className="flex flex-row gap-x-8">
        <div className="basis-1/2">
          <Text variant="h1" className="uppercase">
            creon pass nft
          </Text>
          <div className="border-t border-grey-100 my-4"></div>
          <Text
            variant="p1"
            className={`3xl:hidden w-full fontFamily-satoshi-bold leading-[120%] mb-8 ${gradientClass}`}
          >
            Access to confidential AI tools enabling business optimization and
            development. Only NFT holders will have the ability to use a given
            tool.
          </Text>
          <Text
            variant="p1"
            className={`max-3xl:hidden w-full fontFamily-satoshi-bold leading-[120%] mb-8 ${gradientClass}`}
          >
            The Creon NFT pass unlocks access to AI projects, the Creon
            launchpad, and a ticket to generate passive income through AI-driven
            tools
          </Text>

          <div className="grid grid-cols-2 w-full gap-4">
            <Text
              variant="p2"
              className="col-span-2 3xl:hidden text-white border border-grey-100 rounded-[6px] p-[1rem] basis-full"
            >
              Prospect to derive financial benefits through the redistributed
              profit generated from AI tools, but only when the majority of NFT
              holders decide to release the tool publicly.
            </Text>
            <Text
              variant="p2"
              className="3xl:hidden text-white border border-grey-100 rounded-[6px] p-[1rem] basis-1/2"
            >
              The possibility of allocating investments into new, exceptional
              tokenized AI tools through Creon Launchpad.
            </Text>
            <Text
              variant="p2"
              className="3xl:hidden text-white border border-grey-100 rounded-[6px] p-[1rem] basis-1/2"
            >
              Early access to allocations in inspiring tokenized projects, real
              businesses based on AI.
            </Text>
          </div>

          {/* larger screen */}
          <div className="flex flex-row w-full flex-col gap-y-4">
            <Text variant="p2" className={`${textLarge3xlClass}`}>
              Pre-launch investment opportunities for upcoming AI projects
            </Text>
            <Text variant="p2" className={`${textLarge3xlClass}`}>
              Free and early access to Creon built AI projects
            </Text>
            <Text variant="p2" className={`${textLarge3xlClass}`}>
              Higher allocation limits on the Creon AI Launchpad
            </Text>
            <Text variant="p2" className={`${textLarge3xlClass}`}>
              Revenue share distribution from Creon built AI projects
            </Text>
          </div>
          {/* larger screen */}

          <Button className="lg:w-[50%] 3xl:w-max lg:h-[46px] 3xl:h-[54px] lg:mt-8  3xl:px-40 3xl:mt-16 flex w-auto justify-center items-center transition-all duration-250 ease-out rounded-[6px] text-white text-[18px] font-satoshi-bold cursor-pointer bg-gradient-to-r from-blue to-purple">
            Buy Creon Pass
          </Button>
        </div>
        <div className="basis-1/2 relative">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            controls={false}
          >
            <source src={`/videos/NFT.mp4`} type="video/mp4"></source>
          </video>
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tl from-blue to-purple mix-blend-soft-light transform rotate-180"></div>
        </div>
      </div>
    </SectionTemplate>
  );
};

const gradientClass = `text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple`;
const textLarge3xlClass = `max-3xl:hidden text-white border border-grey-100 rounded-[6px] p-[1rem] fontFamily-satoshi-medium w-max`;

export default CreonPass;
