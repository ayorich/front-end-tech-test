// CustomImage.tsx
import NextImage, { ImageProps } from 'next/image';

interface CustomImageProps extends ImageProps {
  // Add any additional props you need
}

const Image: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  ...props
}) => {
  return (
    <NextImage src={src} alt={alt} width={width} height={height} {...props} />
  );
};

export default Image;
