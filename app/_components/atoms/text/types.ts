import { ReactNode, HTMLProps } from 'react';

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'p1' | 'p2';

interface TextProps {
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
}

export default TextProps;
