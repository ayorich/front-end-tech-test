import React, { FC } from 'react';
import HexagonProps from './types';
import './styles.css';
import Image from '@component/atoms/image';

const Hexagon: FC<HexagonProps> = ({ active, icon }) => {
  return (
    <div className="max-md:mt-[12px] absolute  w-[8rem] h-[8rem] flex items-center justify-center scale-50 md:scale-75 lg:scale-75 2xl:scale-1 top-[-40px] mr-[-40px] transition-all duration-250 ease-out">
      <div className={`hex ${active ? 'active' : ''}`}>
        <div className="hex inner">
          <Image
            src={`/images/${icon}`}
            alt="hexagon-icon"
            width={100}
            height={100}
            className="h-[100px] w-[100px]"
          />
        </div>
      </div>
      <Image
        src="/images/hexagon-wrapper.svg"
        alt="hexagon-wrapper"
        width={100}
        height={114}
        className="h-[114px] w-[100px] absolute"
      />
    </div>
  );
};

export default Hexagon;
