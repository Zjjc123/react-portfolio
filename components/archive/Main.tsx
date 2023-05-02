import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-screen-lg w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4">
            Hello<span className="wave">&#x1F44B;</span> I&#39;m{' '}
            <span className="text-[#67eef3]"> Jason Zhang</span>
          </h1>
          <h2 className="py-2 text-gray-300">
            A computer science student at University of Washington
          </h2>
          <p className="py-4 text-gray-500 sm:max-w-[70%] m-auto">
            I&#39;m focused on applying data science and machine learning to
            various interdisciplinary fields.
          </p>
          <div className="flex items-center justify-between max-w-[380px] m-auto py-5">
            <a
              href="https://www.linkedin.com/in/zjjc123/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-800 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn size={27} />
              </div>
            </a>
            <a
              href="https://github.com/zjjc123"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-800 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub size={27} />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-800 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={27} />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-800 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill size={27} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
