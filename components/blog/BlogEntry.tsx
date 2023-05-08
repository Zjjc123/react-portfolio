import React from 'react';

type Props = {
  date: string;
  children: React.ReactNode;
};

export default function BlogEntry({ date, children }: Props) {
  const dateObj = new Date(date);
  date = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="my-4">
      <div className="italic text-sm">{date}</div>
      <div>{children}</div>
    </div>
  );
}
