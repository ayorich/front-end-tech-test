import Button from '@component/atoms/button';
import Text from '@component/atoms/text';
import BlogCard from '@component/molecules/blogCard';
import SectionTemplate from '@component/templates/sectionTemplates';
import { FC } from 'react';

const Blog: FC = ({}) => {
  return (
    <SectionTemplate>
      <BlogCard
        title="AI Prospects, Market Size, and Development Pace"
        content={`The AI market is one of the most dynamically growing areas of
        technology. According to reports, the global AI market is expected to
        reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth
        Rate) of 36.6%. The key drivers behind this growth include
        advancements in machine learning, increasing demand for big data
        analytics, and growing adoption of AI technology across various
        sectors such as healthcare, finance, and transportation.`}
        src="/images/blog-image2.png"
      />
      <BlogCard
        title="AI Prospects, Market Size, and Development Pace"
        content={`The AI market is one of the most dynamically growing areas of
        technology. According to reports, the global AI market is expected to
        reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth
        Rate) of 36.6%. The key drivers behind this growth include
        advancements in machine learning, increasing demand for big data
        analytics, and growing adoption of AI technology across various
        sectors such as healthcare, finance, and transportation.`}
        src="/images/blog-image1.png"
      />
      <BlogCard
        title="AI Tools and Market"
        content={`AI tools refer to the technologies and software that enable 
        computer systems to perform tasks usually requiring human intellect. 
        The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP),
         machine learning, computer vision, and robotics. With a wide range of applications, 
         AI tools are becoming increasingly indispensable in many sectors, 
         from healthcare to finance, retail, manufacturing, and many others.`}
        src="/images/blog-image3.png"
      />
    </SectionTemplate>
  );
};

const gradientClass = `text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple`;
const textLarge3xlClass = `max-3xl:hidden text-white border border-grey-100 rounded-[6px] p-[1rem] fontFamily-satoshi-medium w-max`;

export default Blog;
