import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ProjectCard extends Component {
    render() {
        console.log(this.props.buttons);
        let element = this.props.buttons.map(function (object) { // for each element in the Roles array, display it https://stackoverflow.com/questions/37997893/promise-error-objects-are-not-valid-as-a-react-child
            return (
                <Card.Link href={object.link}>{object.name}</Card.Link>
            );
        })
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.imageSrc} />
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