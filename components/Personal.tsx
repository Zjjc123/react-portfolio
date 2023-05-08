'use client';

import React from 'react';

type Props = {};

export default function Personal({}: Props) {
  return (
    <>
      <div className="col-span-2">
        <h2 className="text-md">JASON ZHANG</h2>
        <p className="py-2">
          Computer science student at the University of Washington, I am
          passionate about using technology to solve real-world problems in
          various interdisciplinary fields.
        </p>
        <p className="py-2">
          Also a photographer and videographer. I love to capture moments and tell stories.
        </p>
      </div>
    </>
  );
}
