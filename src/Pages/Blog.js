import React, { Component } from 'react'
import { Container, Row, Col, Media, Card, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/120px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="js"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a aliquam lorem.
                                 Sed gravida velit lobortis ex convallis, eget accumsan ex imperdiet. Morbi sagittis bibendum odio, at rhoncus nisl efficitur eget.
                                  Proin vel accumsan tellus, ac commodo augue. Nam tristique nunc non ex mollis condimentum.
                                 Aliquam vitae tortor magna. Phasellus et velit eu enim facilisis sodales.
                                  Cras efficitur velit eget magna pellentesque, id aliquet diam ullamcorper.
                                </p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/120px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="js"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a aliquam lorem.
                                 Sed gravida velit lobortis ex convallis, eget accumsan ex imperdiet. Morbi sagittis bibendum odio, at rhoncus nisl efficitur eget.
                                  Proin vel accumsan tellus, ac commodo augue. Nam tristique nunc non ex mollis condimentum.
                                 Aliquam vitae tortor magna. Phasellus et velit eu enim facilisis sodales.
                                  Cras efficitur velit eget magna pellentesque, id aliquet diam ullamcorper.
                                </p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/120px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="js"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a aliquam lorem.
                                 Sed gravida velit lobortis ex convallis, eget accumsan ex imperdiet. Morbi sagittis bibendum odio, at rhoncus nisl efficitur eget.
                                  Proin vel accumsan tellus, ac commodo augue. Nam tristique nunc non ex mollis condimentum.
                                 Aliquam vitae tortor magna. Phasellus et velit eu enim facilisis sodales.
                                  Cras efficitur velit eget magna pellentesque, id aliquet diam ullamcorper.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>

                    <Col md="3">
                        <h5 className="text-center mt-5">Categori</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/CSS</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-4" bg="warning">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a aliquam lorem.
                                    Sed gravida velit lobortis ex convallis, eget accumsan ex imperdiet. Morbi sagittis bibendum odio, at rhoncus nisl efficitur eget.
                                    Proin vel accumsan tellus, ac commodo augue. Nam tristique nunc non ex mollis condimentum.
                                    Aliquam vitae tortor magna. Phasellus et velit eu enim facilisis sodales.
                                    Cras efficitur velit eget magna pellentesque, id aliquet diam ullamcorper.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
