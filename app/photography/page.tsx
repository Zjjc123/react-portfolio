import React from 'react';
import GridGallery from '../../components/Gallery';

type Props = {
  imgs: ImageType[];
};

type CMSImageType = {
  title: string;
  date: string;
  imageType: string;
  images: [
    {
      id: string;
      url: string;
    }
  ];
};

type ImageType = {
  title: string;
  type: string;
  url: string;
  date: string;
};

const getImages = async () => {
  const response = await fetch(
    'https://api-us-west-2.hygraph.com/v2/clisdsowf1wxr01up5rcqajr1/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
          images {
            title
            date
            imageType
            images {
              id
              url
            }
          }
        }
      `,
      }),
      next: { revalidate: 10 },
    }
  );

  const { data } = await response.json();

  return data.images;
};

export default async function Page() {
  const imageResult: CMSImageType[] = await getImages();

  const images: ImageType[] = [];
  imageResult.forEach((i) => {
    i.images.forEach((j) => {
      images.push({
        title: i.title,
        type: i.imageType,
        date: i.date,
        url: j.url,
      });
    });
  });

  // sort by date
  images.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
  });

  // convert to 3 columns by date where the top row is the most recent using modular arithmetics
  const imagesByDate: ImageType[][] = [];
  for (let i = 0; i < 3; i++) {
    imagesByDate.push([]);
  }
  images.forEach((i, index) => {
    imagesByDate[index % 3].push(i);
  });

  // flatten the array
  const imagesByDateFlattened: ImageType[] = [];
  imagesByDate.forEach((i) => {
    imagesByDateFlattened.push(...i);
  });

  return (
    <div className="my-4 mx-4 md:my-10 md:mx-36">
      <GridGallery images={imagesByDateFlattened.map((i) => i.url)} />
    </div>
  );
}
