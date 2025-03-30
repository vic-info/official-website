import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

interface ActionsProps {
  photoUrl: string;
}

const Actions = ({ photoUrl }: ActionsProps) => {
  return (
    <div className="relative w-full h-full overflow-hidden group">
      <div className="absolute inset-0">
        <Image
          alt="Interview Support"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={"https://github.com/vic-info/official-website/blob/main/public/interviewsupport.png?raw=true"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          quality={90}
          loading="eager"
          style={{ objectPosition: 'center -10%', filter: 'brightness(1.1)' }}
        />
      </div>
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />
      <button className="absolute bg-white/80 dark:bg-darkBg/80 backdrop-blur-sm bottom-4 left-4 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group-hover:w-48 p-2 rounded-full hover:bg-default-100 border border-white/20">
        <div className="flex justify-center items-center">
          <Link isExternal color="foreground">
            <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
              Interview Support
            </span>
            <GoArrowUpRight />
          </Link>
        </div>
      </button>
    </div>
  );
};

export default Actions;
