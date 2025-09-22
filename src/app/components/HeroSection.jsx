"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center justify-self-start text-center sm:text-left"
        >
          <h1 className="mb-4 text-4xl font-extrabold text-[#111112] sm:text-5xl lg:text-8xl lg:leading-normal">
            <span
              className="text-[#111112]"
              style={{
                fontFamily: "Times New Roman, serif",
                fontStyle: "italic",
              }}
            >
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Ana",
                1000,
                "Developer",
                1000,
                "Co-founder &",
                1000,
                "CTO BRAVAS ❤️‍🔥",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
            A transformação só acontece quando inclusão e oportunidade caminham
            juntas! 🌈✊🏿👩🏼‍🦯🧩🌻
          </p>
          <div>
            <Link
              href="/#contact"
              className="mr-4 inline-block w-full rounded-full bg-[#ed6a4c] px-6 py-3 text-black hover:bg-[#f4f4f4] sm:w-fit"
            >
              Hire Me
            </Link>
            <a
              href="/cv/AnaDemier_FullStack_AI_Resume_2025.pdf"
              download="AnaDemier_FullStack_AI_Resume_2025.pdf"
              className="inline-block w-full rounded-full bg-[#ed6a4c] px-1 py-1 text-black hover:bg-[#f4f4f4] sm:w-fit"
            >
              <span className="block rounded-full bg-[#f4f4f4] px-5 py-2 hover:bg-[#ed6a4c]">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full bg-[#ea5352] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/images/hero-image-ana.png"
              alt="hero image"
              className="absolute left-0 top-0 h-full w-full object-contain"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
