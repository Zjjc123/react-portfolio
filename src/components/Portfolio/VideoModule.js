import React from "react";

export default function VideoModule(props) {
  return (
    <div className="mx-20 lg:mx-64 lg:pb-24 pb-8">
      <h1 className="md:text-3xl mb-4 text-center  font-sans font-ultralight">
        {props.title}
      </h1>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="shadow-2xl rounded-lg"
          width="640"
          height="360"
          title={props.title}
          src={"https://youtube.com/embed/" + props.src}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
