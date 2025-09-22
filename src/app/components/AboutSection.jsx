"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>PHP</li>
        <li>Node.js</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        <ul className="list-disc pl-2">
          <li>Analise e Desenvolvimento de Sistemas</li>
          <li>Descomplica UniAmérica Centro Universitário</li>
        </ul>
        <ul className="mt-2 list-disc pl-2">
          <li>Ciência da Computação</li>
          <li>Universidade Brasileira Livre</li>
        </ul>
      </>
    ),
  },
  {
    title: "Languages",
    id: "languages",
    content: (
      <>
        <ul className="list-disc pl-2">
          <li>Inglês</li>
          <li>Nível intermediário</li>
        </ul>
        <ul className="mt-2 list-disc pl-2">
          <li>Espanhol</li>
          <li>Nível básico a intermediário</li>
        </ul>
      </>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black" id="about">
      <div className="items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <Image src="/images/about-image.png" alt="" width={500} height={500} />
        <div className="mt-4 flex h-full flex-col text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-black">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Backend Developer with experience in Python, PHP, JavaScript,
            TypeScript, Salesforce (Apex), BI, and QA, contributing to both B2B
            and B2C projects. Currently, I focus on building automation tools in
            Python, creating SEO solutions, optimizing digital processes, and
            integrating APIs with platforms like OpenAI and HuggingFace. I am a
            quick learner, always eager to grow my skills, and I value
            collaboration to create impactful applications that transform
            businesses and open new opportunities.
          </p>
          <div className="mt-8 flex flex-row justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
