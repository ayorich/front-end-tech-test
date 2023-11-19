import Image from '@component/atoms/image';
import Text from '@component/atoms/text';
import { FC } from 'react';

const Hero: FC = ({}) => {
  return (
    <div className="relative h-screen">
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
      <div className="w-full h-full flex items-end flex-col justify-end pb-16">
        <div className="w-[70%] mx-auto">
          <Text
            variant="h1"
            className="w-full text-[68px] fontFamily-monument leading-[115%] uppercase mb-4"
          >
            The world's first platform for Tokenizing AI blockchain projects
          </Text>
          <Text
            variant="p"
            className="absolute w-max text-[22px] fontFamily-satoshi-bold leading-[170%] text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple
             before:absolute before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r from-blue to-purple
             after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-gradient-to-r from-blue to-purple"
          >
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Hero;