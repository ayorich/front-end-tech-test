import { FC } from 'react';

const SectionTemplate: FC<{
  children: React.ReactNode;
  className?: string;
  scroller?: boolean;
}> = ({ children, className, scroller }) => {
  return (
    <div
      className={`${
        scroller ? `max-lg:w-[95%] max-lg:ml-[5%]` : 'w-[90%] mx-auto'
      } 3xl:w-[70%] py-8 md:py-8 3xl:py-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionTemplate;
