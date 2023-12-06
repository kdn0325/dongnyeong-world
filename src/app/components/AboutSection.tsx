"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiSass,
  SiNodedotjs,
  SiJquery,
  SiStyledcomponents,
  SiExpress,
  SiMongodb,
  SiRecoil,
  SiDjango,
  SiFirebase,
  SiAmazonec2,
  SiMysql,
  SiAmazons3,
  SiEslint,
  SiPrettier,
  SiWebpack,
  SiTailwindcss,
  SiReactquery,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiGithub,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
} from "react-icons/si";
import { GiZeppelin } from "react-icons/gi";

interface Tab {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: Tab[] = [
  {
    title: "Front-end",
    id: "frontend",
    content: (
      <ul className="pl-2">
        <ul>
          <li className="flex items-center mt-2">
            <SiJavascript color="#f7e018" />
            <span className="pl-2">JavaScript</span>
          </li>
          <li className="flex items-center mt-2">
            <SiTypescript color="#007acc" />
            <span className="pl-2">TypeScript</span>
          </li>
          <li className="flex items-center mt-2">
            <SiJquery color="#2e68a8" />
            <span className="pl-2">Jquery</span>
          </li>
          <li className="flex items-center mt-2">
            <SiReact color="#61dafb" />
            <span className="pl-2">React</span>
          </li>
          <li className="flex items-center mt-2">
            <SiReact color="#007acc" />
            <span className="pl-2">React-Native</span>
          </li>
          <li className="flex items-center mt-2">
            <SiNextdotjs color="#000000" />
            <span className="pl-2">Next.js</span>
          </li>
          <li className="flex items-center mt-2">
            <SiSass color="#fe9ae4" />
            <span className="pl-2">SCSS</span>
          </li>
          <li className="flex items-center mt-2">
            <SiStyledcomponents color="#fe9ae4" />
            <span className="pl-2">Styled-components</span>
          </li>
          <li className="flex items-center mt-2">
            <SiTailwindcss color="##22D3EE" />
            <span className="pl-2">Tailwindcss</span>
          </li>
        </ul>
      </ul>
    ),
  },

  {
    title: "State management",
    id: "state",
    content: (
      <ul className="pl-2">
        <li className="flex items-center mt-2">
          <SiReact color="#61dafb" />
          <span className="pl-2">Context API</span>
        </li>
        <li className="flex items-center mt-2">
          <SiRedux color="#764abc" />
          <span className="pl-2">Redux</span>
        </li>
        <li className="flex items-center mt-2">
          <SiRecoil color="#007acc" />
          <span className="pl-2">Recoil</span>
        </li>
        <li className="flex items-center mt-2">
          <SiReactquery color="#00B48A" />
          <span className="pl-2">React-Query</span>
        </li>
      </ul>
    ),
  },

  {
    title: "Backend",
    id: "backend",
    content: (
      <ul className="list-disc pl-2">
        <li className="flex items-center mt-2">
          <SiFirebase color="#FFCA28" />
          <span className="pl-2">Firebase</span>
        </li>
        <li className="flex items-center mt-2">
          <SiNodedotjs color="#8bc500" />
          <span className="pl-2">Node.js</span>
        </li>
        <li className="flex items-center mt-2">
          <SiExpress color="#007bc9" />
          <span className="pl-2">Express</span>
        </li>
        <li className="flex items-center mt-2">
          <SiDjango color="#13aa52" />
          <span className="pl-2">Django</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Etc",
    id: "etc",
    content: (
      <ul className="list-disc pl-2">
        <li className="flex items-center ">
          <SiGraphql color="#e535ab" />
          <span className="pl-2">Graphql</span>
        </li>
        <li className="flex items-center mt-2">
          <SiMongodb color="#13aa52" />
          <span className="pl-2">Mongodb</span>
        </li>
        <li className="flex items-center mt-2">
          <SiMysql color="#00758F" />
          <span className="pl-2">MySQL</span>
        </li>
        <li className="flex items-center mt-2">
          <SiAmazonec2 color="#FF9900" />
          <span className="pl-2">Amazon EC2</span>
        </li>
        <li className="flex items-center mt-2">
          <SiAmazons3 color="#FF9900" />
          <span className="pl-2">Amazon S3</span>
        </li>
        <li className="flex items-center mt-2">
          <SiEslint color="#4B32C3" />
          <span className="pl-2">ESlint</span>
        </li>
        <li className="flex items-center mt-2">
          <SiPrettier color="#F7B93E" />
          <span className="pl-2">Prettier</span>
        </li>
        <li className="flex items-center mt-2">
          <SiWebpack color="#8DD6F9" />
          <span className="pl-2">Webpack</span>
        </li>
        <li className="flex items-center mt-2">
          <SiAdobephotoshop color="#002036" />
          <span className="pl-2">Photoshop</span>
        </li>
        <li className="flex items-center mt-2">
          <SiAdobeillustrator color="330000" />
          <span className="pl-2">Illustrator</span>
        </li>
        <li className="flex items-center mt-2">
          <GiZeppelin color="fbbc38" />
          <span className="pl-2">Zeplin</span>
        </li>
        <li className="flex items-center mt-2">
          <SiFigma color="#000" />
          <span className="pl-2">Figma</span>
        </li>
        <li className="flex items-center mt-2">
          <SiGithub color="#000" />
          <span className="pl-2">Github</span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("frontend");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image3.png"
          width={500}
          height={500}
          alt="image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            코드 작성에 있어서 꼼꼼함과 효율성을 추구합니다. 새로운 기술에 대한
            열정을 가지고 있으며, 항상 더 나은 솔루션을 찾기 위해 노력합니다.
            또한, 협업과 의사 소통 능력을 강화하여 팀에서 원활한 업무를 수행하고
            프로젝트를 성공적으로 완료하는 데 기여하고 있습니다. 프론트엔드 개발
            분야에서 지속적인 성장과 혁신을 추구하며, 사용자들에게 최고의 디지털
            경험을 제공하기 위해 노력하고 있습니다.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("frontend")}
              active={tab === "frontend"}
            >
              Front-end
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("state")}
              active={tab === "state"}
            >
              State management
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              Back-end
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("etc")}
              active={tab === "etc"}
            >
              Etc
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
