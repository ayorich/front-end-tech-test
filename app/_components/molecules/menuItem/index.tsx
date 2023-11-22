import React, { FC } from 'react';
import MenuItemProps from './types';

const MenuItem: FC<MenuItemProps> = ({ text, comingSoon, ismobile }) => {
  const afterClass =
    "after:content-['SOON'] after:absolute after:text-purple after:bg-black after:text-[10px] after:font-satoshi-bold after:rounded-[5.208vw] after:py-[0.104vw] after:px-[0.208vw]";
  return (
    <li
      className={`${comingSoon ? 'ml-[40px]' : ''} ${
        ismobile ? 'ml-[0px]' : ''
      }`}
    >
      <a
        className={`text-white font-satoshi-bold text-[18px] font-normal transition-color duration-250 ease-out cursor-pointer ${
          comingSoon ? '' : 'hover:text-blue'
        } ${comingSoon ? afterClass : ''}`}
      >
        {text}
      </a>
    </li>
  );
};

export default MenuItem;
