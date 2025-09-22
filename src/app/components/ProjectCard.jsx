import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div className="group relative h-52 overflow-hidden rounded-t-xl md:h-72">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="rounded-t-xl object-contain md:object-cover"
        />
        <div className="overlay absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-[#181818] bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-80">
          <Link
            href={gitUrl}
            className="group/link relative mr-2 h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white"
          >
            <CodeBracketIcon className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-black" />
          </Link>
          <Link
            href={previewUrl}
            className="group/link relative h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white"
          >
            <EyeIcon className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-black" />
          </Link>
        </div>
      </div>
      <div className="mt-3 rounded-b-xl bg-[#] px-4 py-6 text-black">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
