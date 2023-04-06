'use client';

import React, { useEffect } from 'react';

type Props = {};

const getUrl = (word: string) => {
  return `https://api.datamuse.com/words?ml=${word}`;
};

export default function Page({}: Props) {
  // get today's date and time
  const [dateTime, setDateTime] = React.useState('');
  const [word, setWord] = React.useState('futuristic');

  const [wordOptions, setWordOptions] = React.useState(["****", "****", "****", "****", "****"]);

  useEffect(() => {
    const today = new Date();
    const date =
      today.getFullYear() +
      '/' +
      (today.getMonth() + 1) +
      '/' +
      today.getDate();
    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    setDateTime(date + ' ' + time);

    setWord('future');
  }, []);

  useEffect(() => {
    setWordOptions(["****", "****", "****", "****", "****"]);

    fetch(getUrl(word))
      // get data
      .then((response) => response.json())
      .then((data) => {
        // parse data
        data = data.map((item: any) => {
          return item.word;
        });
        data = data.slice(0, 5);
        setWordOptions(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [word]);

  return (
    <div className="flex items-center w-1/2 h-screen mx-auto">
      <div className="w-full h-1/2 shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto  pb-8">
        <div
          className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
          id="headerTerminal"
        >
          <div
            className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
            id="closebtn"
          ></div>
          <div
            className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
            id="minbtn"
          ></div>
          <div
            className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
            id="maxbtn"
          ></div>
          <div className="mx-auto pr-16" id="terminaltitle">
            <p className="text-center text-md">Terminal</p>
          </div>
        </div>
        <div
          className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black"
          id="console"
        >
          <p className="pb-1 text-lg">Last login: {dateTime} on dxarts200</p>
          <p className="pb-1 my-1 text-lg">Explore the world of word association as we dive deep into the future</p>

          <a>
            <p className="pb-1 text-white text-lg">
              {word}
            </p>
            {wordOptions.map((option) => {
              return (
                <p onClick={() => setWord(option)} key={'_'} className="pb-1 text-lg hover:text-green-600 hover:font-bold cursor-pointer">
                  {'>'} {option}{' '}
                </p>
              );
            })}
          </a>
        </div>
      </div>
    </div>
  );
}
