import React, { Component } from 'react'
import CarouselBox from '../components/CarouselBox'
import { Container, CardDeck, Card, Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Our Time</h2>
                    <CardDeck className="m-4">
                        <Card bg="warning">
                            <Card.Img 
                                variant="top"
                                src="https://hr-portal.ru/files/mini/873514e130e46a244b5aae0b135db01f_xl1.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Developers team</Card.Text>
                                <Button variant="primary">About Team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="success">
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Developers team</Card.Text>
                                <Button variant="primary">About Team</Button>
                            </Card.Body>
                            <Card.Img 
                                variant="bottom"
                                src="https://www.businessprocessincubator.com/wp-content/uploads/2017/11/www.imaworldwide.comSuccessful-business-team-1e9aba0510509179fb5a8b9b4229014efef06170.jpeg"
                            />
                        </Card>
                        <Card bg="danger">
                            <Card.Img 
                                variant="top"
                                src="https://review.chinabrands.com/chinabrands/seo/image/20171218/build%20a%20team.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Developers team</Card.Text>
                                <Button variant="primary">About Team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}
