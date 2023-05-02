import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

// create a type for the props
interface Prop {
  title: string;
  backgroundImg: StaticImageData;
  tech: string;
  projectUrl: string;
}

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }: Prop) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-xl group hover:bg-gradient-to-r from-[#0c409a] to-[#00c1bd]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="w-[150px] mx-auto text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
