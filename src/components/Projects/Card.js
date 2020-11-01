import React from 'react';

function ProjectCard(props) {
    let links = props.links.map(function (object) {
        return (
            <div className="col">
                <a href={object.link}>{object.name}</a>
            </div>
        );
    })
    let icons = props.icons.map(function (object) {
        return (
            <div className="col">
                <img id={object.name} fluid src={object.img} alt="badge" />
            </div>
        );
    })
    return (
        <div className="card">
            <div className="card-text">
            <img src="https://m.media-amazon.com/images/S/aplus-media/vc/cab6b08a-dd8f-4534-b845-e33489e91240._CR75,0,300,300_PT0_SX300__.jpg" alt="test"/>
                <div className="title-total">
                    <div className="title">{props.title}</div>
                    <h2>Morgan Sweeney</h2>
                    <div className="desc">Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.</div>
                    <div className="actions">
                        {icons}
                    </div></div>
            </div>
        </div>
    );
}

export default ProjectCard;