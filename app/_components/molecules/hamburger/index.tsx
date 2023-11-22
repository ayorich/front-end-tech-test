import React, { FC } from 'react';
import HexagonProps from './types';
import './styles.css';
import Image from '@component/atoms/image';
import HamburgerProps from './types';

const Hamburger: FC<HamburgerProps> = ({ open = false, onClick }) => {
  return (
    <div
      className={`burger-menu  rounded-[5px] flex flex-col cursor-pointer ml-4 ${
        open ? 'cross bg-blue' : 'bg-white'
      }`}
      onClick={onClick}
    >
      <div
        className={`bar my-[3px] w-8 h-1 ${open ? 'bg-white' : 'bg-black'}`}
      ></div>
      <div
        className={`bar my-[3px] w-8 h-1 ${open ? 'bg-white' : 'bg-black'}`}
      ></div>
      <div
        className={`bar my-[3px] w-8 h-1 ${open ? 'bg-white' : 'bg-black'}`}
      ></div>
    </div>
  );
};

export default Hamburger;
