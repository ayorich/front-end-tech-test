import Text from '@component/atoms/text';
import SectionTemplate from '@component/templates/sectionTemplates';
import { FC } from 'react';

const Profiting: FC<{ className?: string }> = ({ className }) => {
  return (
    <SectionTemplate className={className}>
      <div className="flex w-full mb-2">
        <Text variant="h1" className="uppercase w-max">
          Profiting Through
        </Text>
      </div>
      <div className="flex w-full justify-end mb-2">
        <Text
          variant="h3"
          className={`uppercase w-min sm:w-max ${gradientClass}`}
        >
          AI Innovation & Decentralization
        </Text>
      </div>
      <div className="grid grid-cols-3 w-full gap-6 my-8 lg:h-[70vh] xl:h-[auto]">
        <div className="col-span-3 md:col-span-3 lg:col-span-2 rounded-[6px] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            controls={false}
          >
            <source src={`/videos/profit-video.mp4`} type="video/mp4"></source>
          </video>
        </div>
        <div className="col-span-3 md:col-span-3 lg:col-span-1 lg:flex justify-between">
          <div className="border-l border-grey-100 h-full max-lg:hidden" />
          <div className="border-t border-grey-100 w-full lg:hidden mb-8" />
          <div className="md:w-full lg:w-[85%] flex lg:items-center flex-col justify-center">
            <Text
              variant="p1"
              className="3xl:hidden fontFamily-satoshi-bold text-white"
            >
              A Dynamic Business Model for Sustainable Growth and Community
              Engagement
            </Text>
            <Text
              variant="p2"
              className="3xl:hidden fontFamily-satoshi-medium text-white leading-[110%] md:mt-4 lg:mt-6"
            >
              At Creon, we merge AI tools with the crypto and NFT markets,
              leveraging a dynamic business model to generate profits. Our
              commitment to innovation and decentralization allows us to
              strengthen our market position and foster a sustainable ecosystem.
              We empower our community, ensuring transparency and actively
              involving NFT holders in our success.
            </Text>

            {/* larger screen */}
            <Text
              variant="p1"
              className="max-3xl:hidden fontFamily-satoshi-bold text-white"
            >
              The dynamic community driven business model of the future.
            </Text>
            <Text
              variant="p2"
              className="max-3xl:hidden fontFamily-satoshi-medium text-white leading-[110%] mt-6"
            >
              At Creon, we blend the power of AI tools with the dynamic crypto
              and NFT markets, utilizing an innovative business model to drive
              profitability. This approach empowers our community, as our NFT
              and token holders directly benefit from the growth and prosperity
              of the Creon network, creating a win-win scenario for both our
              community and for the projects we launch.
            </Text>
            {/* larger screen */}
          </div>
          <div className="border-r border-grey-100 h-full max-lg:hidden" />
          <div className="border-t border-grey-100 w-full lg:hidden mt-8" />
        </div>
      </div>
    </SectionTemplate>
  );
};

const gradientClass = `text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple`;

export default Profiting;
