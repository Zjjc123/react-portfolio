import React from 'react';
import moment from 'moment';

import {
  AchievementBadge,
  BookBadge,
  InterestBadge,
  WatchBadge,
} from './Badge';

type Props = {
  title: string;
  date: string;
  achievement: string;
  interests: string[];
  watching?: string;
  reading?: string;
  readingPercentage?: number;
  children: React.ReactNode;
};

export default function Post(post: Props) {
  return (
    <>
      <div className="container mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            {post.title}
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-600">
            {moment(post.date).format('MMMM Do, YYYY')}
          </p>

          <p className="mt-6 text-base font-bold">
            Achievement: <AchievementBadge text={post.achievement} />
          </p>

          <p className="mt-2 text-base font-bold">
            Interests:
            {post.interests.length > 0 ? (
              post.interests.map((interest) => {
                return (
                  <span key={interest}>
                    <InterestBadge text={interest} />{' '}
                  </span>
                );
              })
            ) : (
              <></>
            )}
          </p>

          <p className="mt-2 text-base font-bold">
            Watching:
            {post.watching ? <WatchBadge text={post.watching} /> : <></>}
          </p>

          <p className="mt-2 text-base font-bold">
            Reading:
            {post.reading && post.readingPercentage ? (
              <BookBadge
                title={post.reading}
                percent={post.readingPercentage}
              />
            ) : (
              <></>
            )}
          </p>
          <div className="mt-6">{post.children}</div>
        </div>
      </div>
    </>
  );
}
