import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className = 'sticky-bottom'>
            <Container fluid = {true}>
                <Row className = "border-top justify-content-between p-3">
                    <Col className = "d-flex justify-content-center">
                        Jason Zhang 2020
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;