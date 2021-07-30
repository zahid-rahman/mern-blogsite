import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import demoPostImage from './../../images/blog-image.jpeg'
import './ShowPost.css'

const ShowPost = () => {
    return (
        <Card className="p-3">
            <Row>
                <Col xl={4}>
                    <Image src={demoPostImage} fluid style={{ height: '250px', width: '400px' }} />
                </Col>
                <Col xl={8}>
                    <Card.Body>
                        <h3>Post Title ... </h3><span>by <a href="#">zahid rahman</a></span>
                        <br />
                        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reprehenderit, necessitatibus ipsam esse repudiandae explicabo ad animi nam magnam mollitia temporibus quod ex unde iste. At mollitia tempora animi eum tenetur saepe harum velit neque, similique, aut omnis. Nobis minus impedit laudantium cumque quibusdam. Dolore aspernatur totam facere reprehenderit laboriosam.</p>

                        <ul id="lower-details">
                            <li className="details-icon">
                                <i className="fas fa-eye"></i> <span>1000</span>
                            </li>
                        </ul>

                    </Card.Body>
                </Col>
            </Row>

        </Card>
    )
}

export default ShowPost;