import Text from '@component/atoms/text';
import ComingCard from '@component/molecules/comingCard';
import SectionTemplate from '@component/templates/sectionTemplates';
import { FC } from 'react';

const ComingSoon: FC<{ className?: string }> = ({ className }) => {
  return (
    <SectionTemplate className={className}>
      <div className="max-lg:w-[100vw] max-lg:overflow-x-scroll max-lg:scroll-smooth max-lg:snap-x">
        <div className="max-lg:w-max max-lg:flex max-lg:gap-[25px] max-lg:pr-[5rem] lg:grid lg:grid-cols-3 lg:w-full lg:gap-6 my-8">
          <div className="max-lg:w-[40vw] lg:col-span-1 max-lg:snap-start">
            <ComingCard
              title="token"
              subTitle="The Gateway token to the world of AI"
              content={`Set to debut in the latter half of 2024, the CREON token serves as the
          pioneering link between cutting-edge AI initiatives and blockchain
          technology. This innovative token provides NFT and token holders with
          unparalleled access to our Launchpad, AI tools, and exclusive
          pre-launch investment prospects.`}
            />
          </div>
          <div className="max-lg:w-[40vw] max-lg:snap-start lg:col-span-1">
            <ComingCard
              title="revenue"
              subTitle="Driving income and growth through decentralization"
              content={`CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.`}
            />
          </div>
          <div className="max-lg:w-[40vw] max-lg:snap-start lg:col-span-1">
            <ComingCard
              title="launchpad"
              subTitle="Driving the future of AI Innovation"
              content={`The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.`}
            />
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
};

const gradientClass = `text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple`;

export default ComingSoon;
