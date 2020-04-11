import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class ProjectCard extends Component {
    render() {
        let element = this.props.buttons.map(function (object) { // for each element in the Roles array, display it https://stackoverflow.com/questions/37997893/promise-error-objects-are-not-valid-as-a-react-child
            return (
                <Card.Link href={object.link}>{object.name}</Card.Link>
            );
        })
        return (
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={this.props.imgSrc} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>

                    {element}
                </Card.Body>
            </Card>
        );
    }
}

export default ProjectCard;