'use client';

import React, { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    window.location.href =
      'https://github.com/Zjjc123';
  }, []);

  return (
    <>
      <div>Redirecting to projects...</div>
    </>
  );
}
