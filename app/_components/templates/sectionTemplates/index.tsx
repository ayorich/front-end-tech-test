import { FC } from 'react';

const SectionTemplate: FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`md:w-[90%] 3xl:w-[70%] mx-auto md:py-8 3xl:py-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionTemplate;
