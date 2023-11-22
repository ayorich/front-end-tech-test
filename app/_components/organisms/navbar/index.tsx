'use client';

import Button from '@component/atoms/button';
import Image from '@component/atoms/image';
import Hamburger from '@component/molecules/hamburger';
import MenuItem from '@component/molecules/menuItem';
import React, { FC, useState } from 'react';

const NavBar: FC = ({}) => {
  const [open, setOpen] = useState(false);

  const onMobileMenuClicked = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="absolute left-0 top-0 py-[1.953vw] px-[2.93vw] flex items-center justify-between z-10 w-full">
      <Image
        src="/images/creon.png"
        alt="logo"
        width={140}
        height={39}
        className="lg:w-[120px] lg:h-[33px] 3xl:w-[140px] 3xl:h-[39px]"
      />

      <div className="flex items-center">
        <ul className="flex items-center gap-[20px] list-none max-3xl:hidden">
          <MenuItem text="Creon Pass" />
          <MenuItem text="Token" comingSoon />
          <MenuItem text="AI Revenue" comingSoon />
          <MenuItem text="AI Launchpad" comingSoon />
        </ul>
        <Button className="lg:min-w-[110px] h-[38px] lg:h-[38px] 3xl:min-w-[132px] 3xl:h-[44px] flex w-auto  justify-center items-center transition-all duration-250 ease-out border-[2px] border-white bg-transparent rounded-[6px] text-white text-[18px] font-satoshi-bold ml-[6rem] cursor-pointer hover:bg-blue hover:border-blue">
          connect
        </Button>
        <Hamburger open={open} onClick={onMobileMenuClicked} />
      </div>
    </div>
  );
};

export default NavBar;
