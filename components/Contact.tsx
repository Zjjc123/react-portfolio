import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/me.jpg';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-screen-lg m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#67eeff]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-6'>Jason Zhang</h2>
                <h4 className='text-xl'>Software Engineer</h4>
                <p className='py-4'>
                  I am looking for summer internships and research positions. Contact me!
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/zjjc123/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-md shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn size={27}/>
                    </div>
                  </a>
                  <a
                    href='https://github.com/zjjc123'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-md shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub size={27}/>
                    </div>
                  </a>

                  <div className='rounded-full shadow-md shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href='mailto:me@jasonzhang.dev'>
                        <AiOutlineMail size={27}/>
                    </a>
                  </div>
                  <Link href='/resume' legacyBehavior>
                    <a>
                      <div className='rounded-full shadow-md shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill size={27}/>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/c543f8e1-75b9-4bd4-b90f-db47871bd7d7'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex text-black border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex text-black border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex text-black border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex text-black border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 text-black border-gray-300'
                    rows={10}
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-white font-bold mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
            <a href='/#'>
              <div className='rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#67eef3]'
                  size={30}
                />
              </div>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;