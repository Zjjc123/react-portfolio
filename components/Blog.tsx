import React from 'react';
import BlogEntry from './blog/BlogEntry';
import P from './blog/Paragraph';

type Props = {};

export default function Blog({}: Props) {
  return (
    <>
      <BlogEntry date="05/08/2021">
        <P>{''}</P>
      </BlogEntry>
      <BlogEntry date="05/07/2021">
        <P>
          {
            'Hot take (maybe not): introduction computer science education should be about capturing interests, not teaching foundations.'
          }
        </P>
      </BlogEntry>
      <BlogEntry date="05/06/2021">
        <P>
          {
            'On a scale of 1 to the american education system, how elitist is it to be bewildered by the fact that 90% of people at a concert in Seattle had a hard time recognizing Smells Like Teen Spirit?'
          }
        </P>
      </BlogEntry>
      <BlogEntry date="05/03/2023">
        <P>
          {
            'The churning of a near empty lemonade machine. A low fan hums as he worked quietly during the closing shift.'
          }
        </P>
      </BlogEntry>
    </>
  );
}
