import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
interface WebAgentProps {
  webAgentUrl: string;
}

const WebAgent = ({ webAgentUrl }: WebAgentProps) => {
  return (
    <div className="relative bg-cardGreen w-full h-full group dark:bg-darkBg">
      {/* <div className="absolute -bottom-96 left-16 bg-cardPink w-[145%] h-full rounded-full dark:hidden" /> */}
      <div>
        <Image
          alt="Web Agent"
          className="w-full h-full object-contain rounded-2xl"
          height={2380}
          src={"https://github.com/vic-info/official-website/blob/main/public/staffing.jpg?raw=true"}
          width={1164}
        />
      </div>
      <button className="absolute bg-white dark:bg-darkBg bottom-2 left-2 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group-hover:w-40 p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight">
        <div className="flex justify-center items-center">
          <Link isExternal color="foreground">
            <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
              IT Staffing
            </span>
          </Link>

          <GoArrowUpRight />
        </div>
      </button>
    </div>
  );
};

export default WebAgent;
