import React from 'react';
import BlogEntry from './blog/BlogEntry';
import P from './blog/Paragraph';

type Props = {};

export default function Blog({}: Props) {
  return (
    <>
      <BlogEntry date="06/14/2023">
        <P>
          {
            "I've never thought about the fact that movements like modernism or post-modernism isn't just an art movement, but a cultural shift, although expressed in different forms in different mediums. I say this because memes are kinda a part of that shift as well, especially the idea that unironic things are just cringe."
          }
        </P>
      </BlogEntry>
      <BlogEntry date="06/11/2023">
        <P>{'Justice for Daikon Cat!'}</P>
      </BlogEntry>
      <BlogEntry date="05/07/2023">
        <P>
          {
            'Hot take (maybe not): introduction computer science education should be about capturing interests, not teaching foundations.'
          }
        </P>
      </BlogEntry>
      <BlogEntry date="05/06/2023">
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
