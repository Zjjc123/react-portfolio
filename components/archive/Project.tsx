import React from 'react';
import guipyImg from '../public/projects/guipy.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full min-h-[50vh] items-center">
      <div className="max-w-screen-lg mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#67eef3]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Guipy"
            backgroundImg={guipyImg}
            projectUrl="https://github.com/Zjjc123/guipy"
            tech="Python"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
