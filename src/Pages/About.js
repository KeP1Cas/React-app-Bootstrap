import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.png';
import four from '../assets/four.jpg';
import five from '../assets/five.jpg';


export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src={one} className="w-100"/>
                                    <p>lorem dsgsdgs sdgsdgsd sdgsdgsd wgtse h rt jrthj </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src={two} className="w-100"/>
                                    <p>lorem dsgsdgs sdgsdgsd sdgsdgsd wgtse h rt jrthj </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src={three} className="w-100"/>
                                    <p>lorem dsgsdgs sdgsdgsd sdgsdgsd wgtse h rt jrthj </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src={four} className="w-100"/>
                                    <p>lorem dsgsdgs sdgsdgsd sdgsdgsd wgtse h rt jrthj </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src={five} className="w-100"/>
                                    <p>lorem dsgsdgs sdgsdgsd sdgsdgsd wgtse h rt jrthj </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
