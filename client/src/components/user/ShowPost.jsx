import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Image } from 'cloudinary-react'
import { Link } from 'react-router-dom'
import './ShowPost.css'

const ShowPost = ({ post }) => {
    const postLink = `/post/${post._id}`
    return (
        <Card className="p-1">
            <Row>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Image
                        cloudName="zskart"
                        width="auto"
                        height="215"
                        publicId={post.imagePublicId}
                        crop="scale"
                    />
                </Col>
                <Col xl={8} lg={6} md={6} sm={12}>
                    <Card.Body>
                        <div id="post-body">
                            <h3>{post.title} ... </h3><span>by <a href="#">{post.user.username}</a></span>
                            <br />
                            <p id="description" className="mt-3">
                                {post.description}
                            </p>
                            <Link className="btn btn-dark" to={postLink}>view more</Link>
                        </div>
                    </Card.Body>
                </Col>
            </Row>

        </Card>
    )
}

export default ShowPost;