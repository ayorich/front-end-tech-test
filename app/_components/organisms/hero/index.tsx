import Image from '@component/atoms/image';
import Text from '@component/atoms/text';
import { FC } from 'react';

const Hero: FC = ({}) => {
  return (
    <div className="relative h-screen mb-8">
      <div className="absolute left-0 top-0 w-full h-full z-[-1] object-cover">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          controls={false}
        >
          <source src={`/videos/main-bg.mp4`} type="video/mp4"></source>
        </video>
      </div>
      <Image
        src="/images/hero-gradient.png"
        alt="gradient"
        height={100}
        width={100}
        className="h-full w-full absolute top-0 left-0 mix-blend-soft-light"
      />
      <div className="max-md:pb-[1.5rem] w-full h-full flex items-end flex-col justify-end md:pb-32 lg:pb-16">
        <div className="w-[90%] md:w-[90%] 3xl:w-[70%] mx-auto">
          <Text
            variant="h1"
            className="md:w-[60vw] lg:w-full 3xl:hidden uppercase mb-4"
          >
            Empowering AI-Crypto Innovations and Integrating AI Tools into
            crypto.
          </Text>
          <Text variant="h1" className="w-full max-3xl:hidden  uppercase mb-4">
            {`The world's first platform for Tokenizing AI blockchain projects`}
          </Text>
          <Text variant="p1" className={`3xl:hidden ${highlightClasses}`}>
            Creon «Create On» confidential AI Tools for granting access through
            NFTs.
          </Text>
          <Text variant="p1" className={`max-3xl:hidden ${highlightClasses}`}>
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </Text>
        </div>
      </div>
    </div>
  );
};

const highlightClasses = `md:absolute md:w-[60vw] lg:w-max fontFamily-satoshi-bold md:leading-[170%] lg:leading-[170%] text-transparent 
                          bg-clip-text bg-gradient-to-r from-blue to-purple
                          before:absolute before:left-0 max-md:before:ml-[5%] max-md:before:w-[90%] before:w-full before:h-[1px] before:bg-gradient-to-r from-blue to-purple
                          after:absolute after:left-0 max-md:after:bottom-[1.5rem] after:bottom-0 max-md:after:ml-[5%] max-md:after:w-[90%] after:w-full after:h-[1px] after:bg-gradient-to-r from-blue to-purple`;

export default Hero;
