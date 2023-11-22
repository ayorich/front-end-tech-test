import MenuItem from '@component/molecules/menuItem';
import Image from '@component/atoms/image';

const SideMenu = ({ isOpen, onClick }: SideMenuProps) => {
  const transformClasses = 'transform transition-all ease-in-out duration-300';

  return (
    <div
      className={`${transformClasses} 3xl:hidden absolute top-0 right-0 z-[1] w-full h-[100dvh] flex justify-end overflow-hidden ${
        isOpen
          ? 'bg-[rgba(0,0,0,0.5)]'
          : 'bg-[rgba(0,0,0,0)] invisible pointer-events-none'
      }`}
      onClick={onClick}
    >
      <div
        className={`${transformClasses} h-full w-52 lg:w-[20vw] xl:w-[15vw] bg-black pt-24 pb-8 pl-7 md:pl-4 flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-[100%]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="border-t border-grey-100 w-full  mb-4"></div>
          <MenuItem text="Creon Pass" ismobile />
          <div className="border-t border-grey-100 w-full  my-4"></div>

          <MenuItem text="Token" comingSoon ismobile />
          <div className="border-t border-grey-100 w-full  my-4"></div>

          <MenuItem text="AI Revenue" comingSoon ismobile />
          <div className="border-t border-grey-100 w-full  my-4"></div>

          <MenuItem text="AI Launchpad" comingSoon ismobile />
          <div className="border-t border-grey-100 w-full  my-4"></div>
        </div>
        <div className="flex max-md:mb-4">
          <Image
            src="/images/Telegram.svg"
            alt="Telegram"
            width={34}
            height={34}
            className="mr-[10px]"
          />

          <Image
            src="/images/Discord.svg"
            alt="Discord"
            width={34}
            height={34}
            className="mr-[10px]"
          />

          <Image
            src="/images/Twitter.svg"
            alt="Twitter"
            width={34}
            height={34}
            className="mr-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
