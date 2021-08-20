import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Image } from 'cloudinary-react'
import './ShowPost.css'

const ShowPost = ({ post }) => {
    return (
        <Card className="p-1">
            <Row>
                <Col xl={3}>
                    <Image 
                        cloudName="zskart"
                        width="300"
                        height="215"
                        publicId={post.imagePublicId}
                        crop="scale"
                    />
                </Col>
                <Col xl={9}>
                    <Card.Body>
                        <h3>{post.title} ... </h3><span>by <a href="#">{post.user.username}</a></span>
                        <br />
                        <p id="description" className="mt-3">
                            {post.description}
                        </p>
                        <a className="btn btn-dark" href="#">view more</a>
                    </Card.Body>
                </Col>
            </Row>

        </Card>
    )
}

export default ShowPost;