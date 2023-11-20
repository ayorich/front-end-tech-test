import { FC } from 'react';

const SectionTemplate: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-[70%] mx-auto py-16">{children}</div>;
};

export default SectionTemplate;
