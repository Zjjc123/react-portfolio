'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function NavBar() {
  const navBg = '#0C0F13';
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={'fixed w-full h-20 z-[100]'}
    >
      <div className="flex justify-between items-center max-w-screen-xl w-full h-full px-8 2xl:px-16 mx-auto">
        <Link href="/">
          <div className="font-bold uppercase">Jason Zhang</div>
        </Link>
        <div>
          <ul className="hidden md:flex">
            {/* TODO: Next.js Link is broken rn for section scrolling. Swap to link when fixed*/}
            <li className="ml-10 text-sm uppercase font-semibold hover:text-gray-200">
              <a href="/#">Home</a>
            </li>
            <li className="ml-10 text-sm uppercase font-semibold hover:text-gray-200">
              <a href="/#about">About</a>
            </li>
            <li className="ml-10 text-sm uppercase font-semibold hover:text-gray-200">
              <Link href="/#projects" scroll={false}>
                Projects
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase font-semibold hover:text-gray-200">
              <Link href="/resume" scroll={false}>
                Resume
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase font-semibold hover:text-gray-200">
              <Link href="/#contact" scroll={false}>
                Contact
              </Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className="md:hidden cursor-pointer hover:text-gray-300"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#10181e] p-10 ease-in-out duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 w-[75%] sm:w-[60%] md:w-[45%] h-screen'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <div className="font-bold uppercase">Jason Zhang</div>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#b7dadf]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/clint-briley-50056920a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/fireclint"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
