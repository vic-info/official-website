import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

interface PaperProps {
  paperUrl: string;
}

const Paper = ({ paperUrl }: PaperProps) => {
  return (
    <div className="relative w-full h-full overflow-hidden group bg-[#0A192F] flex items-center justify-center p-2">
      <div className="relative w-[95%] h-[95%]">
        <Image
          alt="E-Verify"
          className="object-contain"
          src={"https://github.com/vic-info/official-website/blob/main/public/everify.png?raw=true"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <button className="absolute bg-white/80 dark:bg-darkBg/80 backdrop-blur-sm bottom-2 left-2 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group-hover:w-32 p-2 rounded-full hover:bg-default-100 border border-white/20">
        <div className="flex justify-center items-center">
          <Link
            isExternal
            color="foreground"
            href="https://www.e-verify.gov/about-e-verify/e-verify-data/how-to-find-participating-employers"
          >
            <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
              E-Verify
            </span>
            <GoArrowUpRight />
          </Link>
        </div>
      </button>
    </div>
  );
};

export default Paper;
