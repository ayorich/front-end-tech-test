import { FC } from 'react';

const SectionTemplate: FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <div className={`w-[70%] mx-auto py-16 ${className}`}>{children}</div>;
};

export default SectionTemplate;
