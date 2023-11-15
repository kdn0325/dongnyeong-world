"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { NotionRenderer } from "react-notion";

export const projectsData = [
  {
    id: 1,
    title: "국내 코로나 현황",
    description: "Chart.JS를 통한 국내 코로나 현황",
    image:
      "https://user-images.githubusercontent.com/91298955/161950401-93b3f7a8-cdb5-40db-ab45-a54689ebc213.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kdn0325/covid19-app",
    previewUrl:
      "https://continuous-headstand-70c.notion.site/ff7ca65f79e84c9db2628f4e15059b20?pvs=4",
  },
  {
    id: 2,
    title: "TodoList-Redux",
    description: "Redux를 사용한 Todo-List",
    image:
      "https://github.com/kdn0325/kdn0325.github.io/assets/91298955/bbd00242-4c6a-44b2-b30a-42a46f4ab23c",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kdn0325/redux-TodoList",
    previewUrl:
      "https://continuous-headstand-70c.notion.site/Todo-List-88024151c3594615b10582f05f764166?pvs=4",
  },
  {
    id: 3,
    title: "Watching",
    description: "Open API를 활용한 영화 정보 서비스",
    image:
      "https://user-images.githubusercontent.com/91298955/161952365-5ed9f953-dea1-433e-8a65-ef3ac3024c1e.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kdn0325/watching-app",
    previewUrl:
      "https://continuous-headstand-70c.notion.site/Watching-8d3be5a406994ec3be4f630850a13577?pvs=4",
  },
  {
    id: 4,
    title: "Ecommerce",
    description: "쇼핑몰 서비스",
    image:
      "https://github.com/kdn0325/kdn0325.github.io/assets/91298955/13c71500-56d2-4325-bf3e-5da88ea17478",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kdn0325/ecommerce-app",
    previewUrl:
      "https://continuous-headstand-70c.notion.site/Ecommerce-App-4068dba31eb541a6b54f3b51c9d1b2b8?pvs=4",
  },
  {
    id: 5,
    title: "ChatBot App",
    description: "Open AI를 이용한 Chatbot",
    image:
      "https://github.com/kdn0325/kdn0325.github.io/assets/91298955/77eb81a6-3717-4dc9-b14f-d4ba83480a56",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kdn0325/chatBot",
    previewUrl:
      "https://continuous-headstand-70c.notion.site/ChatBot-App-a2c3f4a1c8404f0e8d6243ebe7e85ce1?pvs=4",
  },
  {
    id: 6,
    title: "The New York Times App",
    description: "New York Times Open API를 이용한 뉴스 앱",
    image:
      "https://github.com/kdn0325/nextjs-abel-frontelio/assets/91298955/779f4e3e-ac26-4050-bb09-bea410c9cb90)",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kdn0325/nyt-news-app",
    previewUrl:
      "https://continuous-headstand-70c.notion.site/The-New-York-Times-App-8758785784ff4a95b7637e700ddbf1a2?pvs=4",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
