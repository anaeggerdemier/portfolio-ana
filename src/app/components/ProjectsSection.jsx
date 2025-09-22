"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BRAVAS In Tech ❤️‍🔥",
    description:
      "Co-fundadora e CTO da BRAVAS In Tech uma comunidade que conecta, valoriza e apoia mulheres em tecnologia. Auxilio na estruturação tecnológica, implementação de soluções de automação e engajamento para mentorias e eventos. Nosso impacto já apoiou dezenas de mulheres a ingressarem e se fortalecerem no setor de TI, mostrando que nada aqui é feito sozinha. União e diversidade são nossa força.",
    image: "/images/projects/1.png",
    tag: ["All", "Community", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Chatbot 🤖",
    description:
      "Desenvolvimento de chatbots inteligentes para atendimento digital, utilizando IA conversacional, automação de fluxos e integração com sistemas de CRM. Estruturei árvores de decisão, fluxos de exceção e lógicas de transbordo, além de modelar intents em NLP para maior precisão no atendimento. Também liderei a criação de um chatbot de sorteio para eventos, totalmente funcional, com gamificação e fluxos conversacionais dinâmicos.",
    image: "/images/projects/2.png",
    tag: ["All", "AI", "Automation", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "AI & SEO Automation ⚙️",
    description:
      "Desenvolvo soluções de automação com Python e LLMs (OpenAI, HuggingFace) para otimizar SEO e processos digitais. Construí ferramentas para categorização de dados, escrita assistida e integração com APIs, aumentando produtividade e reduzindo tempo operacional em mais de 40%.",
    image: "/images/projects/3.png",
    tag: ["All", "AI", "Automation", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Web Designer 🎨",
    description:
      "Crio layouts responsivos e elementos gráficos para e-commerce. Colaborei com UX e marketing, realizei testes A/B e refinei a experiência do usuário. Tecnologias: HTML, CSS, JavaScript, Git, Figma e Photoshop",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Dashboards & Data Insights 📊",
    description:
      "Construí dashboards no Looker Studio conectados diretamente a bancos de dados, entregando insights estratégicos para stakeholders. Também desenvolvi parsers em Python para coleta e processamento de dados, além de contribuir em backends com Django e Laravel.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Automação de Testes & Confiabilidade ✓",
    description:
      "Desenvolvimento e execução de testes automatizados end-to-end com Cypress (TypeScript/JS), garantindo a confiabilidade e a escalabilidade de aplicações web. Modelei cenários críticos, integrei os testes em pipelines de CI/CD e reduzi em 40% os bugs em produção. Essa atuação trouxe maior qualidade, segurança e eficiência ao ciclo de desenvolvimento, fortalecendo a entrega contínua de valor para o produto.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
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
      <h2 className="mb-8 mt-4 text-center text-4xl font-bold text-black md:mb-12">
        My Work
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-black">
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
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
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
