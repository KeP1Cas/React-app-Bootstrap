import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CanadaImg from '../assets/kanada.jpg'
import Bg from '../assets/bg-2.jpg'
export default class CaruselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CanadaImg}
                        alt="img"
                    />
                    <Carousel.Caption>
                        <h3>Img Canada</h3>
                        <p>lorem ipsun dolor sit amet containers adipiscilarius elite. Queen pain</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Bg}
                        alt="img"
                    />
                    <Carousel.Caption>
                        <h3>Img Bg</h3>
                        <p>lorem ipsun dolor sit amet containers adipiscilarius elite. Queen pain</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CanadaImg}
                        alt="img"
                    />
                    <Carousel.Caption>
                        <h3>Img Canada</h3>
                        <p>lorem ipsun dolor sit amet containers adipiscilarius elite. Queen pain</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
