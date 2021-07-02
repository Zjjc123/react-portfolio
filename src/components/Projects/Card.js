import React from "react";

function ProjectCard(props) {
  let links = props.links.map(function (object) {
    return <a href={object.link}>{object.name}</a>;
  });

  return (
    <div className="card">
      <div className="pic">
        <img src={props.imgSrc} alt="card" />
      </div>
      <div className="desc">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        {links}
      </div>
    </div>
  );
}

export default ProjectCard;
