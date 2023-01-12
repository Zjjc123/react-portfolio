"use client";

import React, {useState, useEffect} from 'react';
import { FaTrophy } from 'react-icons/fa';

interface Props {
  text: string;
}

interface BookProps {
  title: string;
  percent: number;
}

const colorMap = [
  'bg-red-500',
  'bg-yellow-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-purple-500',
  'bg-pink-500',
];

const colorMapLight = [
  'text-red-200',
  'text-yellow-100',
  'text-green-200',
  'text-blue-200',
  'text-indigo-200',
  'text-purple-200',
  'text-pink-200',
];

const stringToColor = (string: string): string => {
  let hash = 0;

  if (string.length == 0) return "bg-gray-500 text-white";

  for (let i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  const color = Math.abs(hash) % colorMap.length;
  return colorMap[color] + ' ' + colorMapLight[color];
};

export const WatchBadge = ({ text }: Props) => {
  const [color, setColor] = useState<string>("bg-gray-500 text-white");

  // to avoid ssr error
  useEffect(() => {
      setColor(stringToColor(text));
  }, [text]);

  return (
    <div
      className={
        'inline-block justify-center text-sm font-medium mr-2 px-2.5 py-0.5 rounded ' +
        color
      }
    >
      {text.replaceAll('_', ' ')}
    </div>
  );
};

export const AchievementBadge = ({ text }: Props) => {
  const [color, setColor] = useState<string>("bg-gray-500 text-white");

  // to avoid ssr error
  useEffect(() => {
      setColor(stringToColor(text));
  }, [text]);

  return (
    <div
      className={
        'inline-block justify-center text-sm font-medium mr-2 px-2.5 py-0.5 rounded ' +
        color
      }
    >
      <div className="flex flex-row items-center">
        <FaTrophy className="mr-1" />
        {text.replaceAll('_', ' ')}
      </div>
    </div>
  );
};

export const InterestBadge = ({ text }: Props) => {
  const [color, setColor] = useState<string>("bg-gray-500 text-white");

  // to avoid ssr error
  useEffect(() => {
      setColor(stringToColor(text));
  }, [text]);

  return (
    <div
      className={
        'inline-block justify-center text-sm font-medium mr-2 px-2.5 py-0.5 rounded ' +
        color
      }
    >
      <div>{text.replaceAll('_', ' ')}</div>
    </div>
  );
};

export const BookBadge = ({ title, percent }: BookProps) => {
  const bookStyle = {
    width: percent + '%',
  };
  
  const [color, setColor] = useState<string>("bg-gray-500 text-white");

  // to avoid ssr error
  useEffect(() => {
      setColor(stringToColor(title));
  }, [title]);


  return (
    <div
      className={
        'inline-block justify-center text-sm font-medium mr-2 px-2.5 py-0.5 rounded ' +
        color
      }
    >
      <div className="flex flex-row items-center">
        <div className='mr-2'>{title.replaceAll('_', ' ')}</div>
        <div className="w-[100px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-green-400 h-2.5 rounded-full"
            style={bookStyle}
          ></div>
        </div>
      </div>
    </div>
  );
};
