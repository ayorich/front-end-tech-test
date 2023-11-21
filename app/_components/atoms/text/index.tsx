import { FC } from 'react';
import TextProps from './types';

const Text: FC<TextProps> = ({
  variant,
  className = '',
  children,
  ...restProps
}) => {
  switch (variant) {
    case 'h1':
      return (
        <h1
          {...restProps}
          className={`font-bold text-white md:text-[44px] lg:text-[44px] 3xl:text-[68px] fontFamily-monument lg:leading-[120%] 3xl:leading-[115%] ${className}`}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 {...restProps} className={`font-bold text-white ${className}`}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          {...restProps}
          className={`font-bold md:text-[28px] lg:text-[28px] 3xl:text-[38px] fontFamily-monument lg:leading-[110%] 3xl:leading-[115%] ${className}`}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 {...restProps} className={`font-bold  ${className}`}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 {...restProps} className={`font-bold  ${className}`}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 {...restProps} className={`font-bold  ${className}`}>
          {children}
        </h6>
      );
    case 'p1':
      return (
        <p
          {...restProps}
          className={`md:text-[18px] lg:text-[18px] 3xl:text-[22px] ${className}`}
        >
          {children}
        </p>
      );
    case 'p2':
      return (
        <p
          {...restProps}
          className={`md:text-[16px] lg:text-[16px] 3xl:text-[18px] ${className}`}
        >
          {children}
        </p>
      );
    case 'p':
      return (
        <p {...restProps} className={`${className}`}>
          {children}
        </p>
      );
    default:
      return (
        <span {...restProps} className={`${className}`}>
          {children}
        </span>
      );
  }
};

export default Text;
