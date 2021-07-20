import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignUpPage = () => {

    const bigScreenCustomSize = {
        span: 4,
        offset: 4
    }

    return (
        <Container>
            <Row>
                <Col xl={bigScreenCustomSize} lg={bigScreenCustomSize} md={12} sm={12} xs={12}>
                    <h1 className="text-center p-5">
                        Sign up
                    </h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control 
                                name="email" 
                                type="email" 
                                placeholder="Enter email" 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control 
                                name="nid" 
                                type="text" 
                                placeholder="Enter national id" 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control 
                                name="password" 
                                type="password" 
                                placeholder="Password" 
                            />
                        </Form.Group>

                        <Form.Group  className="mb-3" controlId="formBasicPassword">
                            <Form.Control 
                                name="confirmPassword" 
                                type="password" 
                                placeholder="confirm password" 
                            />
                        </Form.Group>


                        <Form.Group className="mb-3 text-center" controlId="formBasicCheckbox">
                            <Link to='/' className="btn btn-link">back to homepage</Link>
                            <Link to='/login' className="btn btn-link">Already have an account</Link>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Sign Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUpPage