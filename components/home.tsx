"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { Responsive } from "react-grid-layout";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Paper from "./paper";
import { AnimationSwitch } from "./animation-swith";
import MiniPic from "./mini-pic";

import { cn } from "@/lib/utils";
import AvatarTransition from "@/components/avatar";
import { DockDemo } from "@/components/dock-demo";
import { ThemeSwitch } from "@/components/theme-switch";
import CardStack from "@/components/card-stack";
import AnimatedEmoji from "@/components/animated-emoji";
import IconCloud from "@/components/icon-cloud";
import MapComponent from "@/components/map";
import WebAgent from "@/components/webagent";
import Chatbot from "@/components/chatbot";
import { MiniModel } from "@/components/mini";
import Actions from "@/components/actions";
import { layouts, selectedCard } from "@/config/layout";
import { icons } from "@/config/icons";
import useWindowWidth from "@/hooks/useWindowWidth";

interface HomeProps {
  photos: string[];
  avatarUrl: string;
  dogUrl: string;
  actionImageUrl: string;
  resumeUrl: string;
  webagentUrl: string;
  chatbotUrl: string;
  paperUrl: string;
}

const Home = ({
  photos,
  avatarUrl,
  dogUrl,
  actionImageUrl,
  resumeUrl,
  webagentUrl,
  chatbotUrl,
  paperUrl,
}: HomeProps) => {
  const width = useWindowWidth();
  const [tabSelected, setTabSelected] = useState("all");
  const [animated, setAnimated] = useState(false);
  const router = useRouter();

  if (!width) {
    return null;
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <Tabs
        aria-label="Tabs"
        className="mb-2 md:mb-6 rounded-full"
        classNames={{
          cursor: "shadow-none",
          tabList:
            "bg-[#ece7e7] dark:bg-darkBg border-2 border-transparent dark:border-knight rounded-full",
        }}
        motionProps={{
          initial: { scale: 0.8 },
          animate: { scale: 1 },
          exit: { scale: 0.8 },
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
        radius={"full"}
        onSelectionChange={(selected) => {
          if (selected === "blog") {
            router.push("/blog");

            return;
          }
          setTabSelected(selected as string);
        }}
      >
        <Tab key="projects" title="Services" />
        <Tab key="about" title="About VIC INFO" />
      </Tabs>

      <Responsive
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        className="layout w-full h-full"
        cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
        isDraggable={width > 480}
        isResizable={false}
        layouts={layouts[tabSelected]}
        margin={[15, 15]}
        width={width}
      >
        <div
          key="avatar"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex flex-col justify-between p-5 overflow-hidden z-[1]",
            selectedCard[tabSelected]["avatar"] ? "opacity-100" : "opacity-50",
          )}
        >
          <AvatarTransition avatarUrl={"/vic_boy.jpg"} dogUrl={"/vic_girl.jpg"} />
          <p className="text-sm md:text-medium">
            We are VIC INFO. We specialize in IT staffing and tech training,
            offering comprehensive technical training and interview support
            services to candidates. Our mission is to connect our clients with
            highly skilled talent that perfectly matches their needs. Many of
            the candidates trained by us are now thriving in roles at top
            companies like Walmart, eBay, Apple, and PayPal. At VIC INFO, we are
            committed to bridging the gap between talented individuals and
            leading organizations in the tech industry.
          </p>
          <DockDemo resumeUrl={resumeUrl} />
        </div>
        <div
          key="iconCloud"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center relative overflow-hidden p-10 md:p-8 z-[1]",
            selectedCard[tabSelected]["iconCloud"]
              ? "opacity-100"
              : "opacity-50",
          )}
        >
          <IconCloud iconSlugs={icons} />
        </div>
        <div
          key="webAgent"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
            selectedCard[tabSelected]["webAgent"]
              ? "opacity-100"
              : "opacity-50",
          )}
        >
          <WebAgent webAgentUrl={webagentUrl} />
        </div>
        <div
          key="chatBot"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
            selectedCard[tabSelected]["chatBot"] ? "opacity-100" : "opacity-50",
          )}
        >
          <Chatbot chatbotUrl={chatbotUrl} />
        </div>
        <div
          key="actions"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
            selectedCard[tabSelected]["actions"] ? "opacity-100" : "opacity-50",
          )}
        >
          <Actions photoUrl={actionImageUrl} />
        </div>
        <div
          key="paper"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1] overflow-hidden",
            selectedCard[tabSelected]["paper"] ? "opacity-100" : "opacity-50",
          )}
        >
          <Paper paperUrl={paperUrl} />
        </div>
      </Responsive>
    </div>
  );
};

export default Home;
