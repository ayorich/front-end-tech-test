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
          className={`text-4xl font-bold text-white ${className}`}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          {...restProps}
          className={`text-3xl font-bold text-white ${className}`}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          {...restProps}
          className={`text-2xl font-bold text-white ${className}`}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          {...restProps}
          className={`text-xl font-bold text-white ${className}`}
        >
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5
          {...restProps}
          className={`text-lg font-bold text-white ${className}`}
        >
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6
          {...restProps}
          className={`text-base font-bold text-white ${className}`}
        >
          {children}
        </h6>
      );
    case 'p':
    default:
      return (
        <p {...restProps} className={`text-base text-white ${className}`}>
          {children}
        </p>
      );
  }
};

export default Text;
