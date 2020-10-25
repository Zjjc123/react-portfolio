import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ProjectCard extends Component {
    render() {
        let links = this.props.links.map(function (object) {
            return (
                <Col>
                    <Card.Link href={object.link}>{object.name}</Card.Link>
                </Col>
            );
        })
        let icons = this.props.icons.map(function (object) {
            return (
                <Col>
                    <Image id="badge" fluid src={object.img} />
                </Col>
            );
        })
        return (
            <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={this.props.imgSrc} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text className="card-description">
                            {this.props.description}
                        </Card.Text>
                        <Row>
                            {links}
                        </Row>
                        <div className="py-2" />
                        <Row>
                            {icons}
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProjectCard;