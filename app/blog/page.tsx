import { GraphQLClient, gql } from 'graphql-request';
import moment from 'moment';
import {
  AchievementBadge,
  BookBadge,
  InterestBadge,
  WatchBadge,
} from '../../components/Badge';

export interface Post {
  title: string;
  date: string;
  slug: string;
  achievement: string;
  interests: string[];
  watching: string;
  reading: string;
  readingPercentage: number;
  content: {
    html: string;
  };
}

const hygraph = new GraphQLClient(
  'https://api-us-west-2.hygraph.com/v2/clciqogdu2ink01t78angb61k/master'
);

const QUERY = gql`
  {
    posts {
      title
      date
      slug
      achievement
      interests
      watching
      reading
      readingPercentage
      content {
        html
      }
    }
  }
`;

async function getData() {
  const { posts } = await hygraph.request(QUERY);
  return posts;
}

// next.js 13 server side rendering
export default async function Page() {
  const post = await getData();
  return (
    <>
      <h1 className="mx-auto text-center pt-20 md:max-w-screen-lg">Blog</h1>
      {post.map((post: Post) => {
        return (
          <div key={post.slug} className="container mx-auto pt-20">
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
                {post.watching ? (
                  <BookBadge
                    title={post.reading}
                    percent={post.readingPercentage}
                  />
                ) : (
                  <></>
                )}
              </p>
              <div className='mt-6'
                dangerouslySetInnerHTML={{ __html: post.content.html }}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}
