import React from 'react';
import BlogEntry from './blog/BlogEntry';
import P from './blog/Paragraph';

type Props = {};

export default function Blog({}: Props) {
  return (
    <>
      <BlogEntry date="05/07/2021">
        <P>{'The churning of a near empty lemonade machine. A low fan hums as he worked quietly. The closing shift'}</P>
      </BlogEntry>
      <BlogEntry date="05/03/2023">
        <P>{'The churning of a near empty lemonade machine. A low fan hums as he worked quietly during the closing shift.'}</P>
      </BlogEntry>
    </>
  );
}
