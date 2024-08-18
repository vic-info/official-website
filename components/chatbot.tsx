import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
interface ChatbotProps {
  chatbotUrl: string;
}

const Chatbot = ({ chatbotUrl }: ChatbotProps) => {
  return (
    <div className="relative bg-cardYellow w-full h-full group dark:bg-darkBg">
      {/* <div className="absolute -top-40 left-40 bg-cardPink w-[135%] h-full rounded-full dark:hidden" /> */}
      <div>
        <Image
          alt="Chatbot"
          className="h-48 md:h-96 object-cover rounded-2xl"
          height={1280}
          src={"https://github.com/vic-info/official-website/blob/main/public/web_dev.jpg?raw=true"}
          width={2629}
        />
      </div>
      <button className="absolute bg-white dark:bg-darkBg bottom-2 left-2 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group-hover:w-40 p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight">
        <div className="flex justify-center items-center">
          <Link isExternal color="foreground">
            <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
              Tech Training
            </span>
            <GoArrowUpRight />
          </Link>
        </div>
      </button>
    </div>
  );
};

export default Chatbot;
