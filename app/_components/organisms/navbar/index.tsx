import Button from '@component/atoms/button';
import Image from '@component/atoms/image';
import MenuItem from '@component/molecules/menuItem';
import React, { FC } from 'react';

const NavBar: FC = ({}) => {
  return (
    <div className="absolute left-0 top-0 py-[1.953vw] px-[2.93vw] flex items-center justify-between z-10 w-full">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={140}
        height={39}
        className="w-[140px] h-[39px]"
      />

      <div className="flex">
        <ul className="flex items-center gap-[20px] list-none">
          <MenuItem text="Creon Pass" />
          <MenuItem text="Token" comingSoon />
          <MenuItem text="AI Revenue" comingSoon />
          <MenuItem text="AI Launchpad" comingSoon />
        </ul>
        <Button className="min-w-[132px] flex w-auto h-[44px] justify-center items-center transition-all duration-250 ease-out border-[2px] border-white bg-transparent rounded-[2px] text-white text-[18px] font-satoshi-bold ml-[6rem] cursor-pointer hover:bg-blue hover:border-blue">
          connect
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
