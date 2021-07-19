import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import SiteLayout from '../layout/SiteLayout'
const CreatePost = () => {

    const rednerCreatePostPageContent = () => {
        return (
            <Container className="p-5">

                <Row>
                    <Col lg={8}>
                        <h1 className="mt-5 mb-5">Create Post</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter Title" />
                            </Form.Group>

                            <Form.Group controlId="formFileLg" className="mb-3">
                                <Form.Control className="form-control" type="file" size="lg" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control as="textarea" placeholder="Write your post" style={{ height: '200px' }} />
                            </Form.Group>

                            <Button variant="dark" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={4}>
                        <p>Image Preview</p>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <>
            <SiteLayout siteContent={rednerCreatePostPageContent}></SiteLayout>
        </>
    )
}

export default CreatePost