import React from 'react';
import Image from 'next/image';

interface GridGalleryProps {
  images: string[];
}

export default function GridGallery({ images }: GridGalleryProps) {
  return (
    <div className='inline-block columns-1 md:columns-3 gap-0'>
      {images &&
        images.map((imageUrl, index) => (
          <GridGalleryCard key={index} imageUrl={imageUrl} />
        ))}
    </div>
  );
}

interface GridGalleryCardProps {
  imageUrl: string;
}

function GridGalleryCard({ imageUrl }: GridGalleryCardProps) {
  return (
    <div className="w-full h-auto px-2 py-2">
      <Image id="nextImg" src={imageUrl} alt="img" fill/>
    </div>
  );
}
