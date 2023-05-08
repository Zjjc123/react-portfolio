import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function P({ children }: Props) {
  return <div className="mb-2">{children}</div>;
}
