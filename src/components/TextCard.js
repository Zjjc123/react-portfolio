import React from "react";

export default function TextCard(props) {
  return (
    <div className="max-w-2xl my-4 px-4">
      <div className="overflow-hidden shadow-md border rounded-lg">
        <div className="px-6 py-4 bg-white border-b border-gray-300 font-bold uppercase">
          {props.title}
        </div>
        <div className="p-6 bg-white border-b border-gray-300 leading-10">
          {props.text.split("\n").map(function (item, key) {
            return (
              <span key={key}>
                {item}
                <br />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
