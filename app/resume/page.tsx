'use client';

import React, { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    // redirect to https://github.com/Zjjc123/resume/blob/main/main.pdf
    window.location.href =
      'https://github.com/Zjjc123/resume/blob/main/main.pdf';
  }, []);

  return (
    <>
      <div>Redirecting to resume...</div>
    </>
  );
}
