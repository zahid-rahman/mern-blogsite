import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PageTitle from '../../components/head-title/PageTitle'
const SERVER_API_URL = process.env.REACT_APP_SERVER_API

const SignUpPage = () => {
    const [userRequest, setUserRequest] = useState({
        username: "",
        status: "inactive",
        userType: "blogger",
        email: "",
        nid: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState({});
    const [alertVisible, setAlertVisible] = useState(false)
    const [statusCode, setStatusCode] = useState(0)

    const showAlert = () => { 
        setAlertVisible(true)
        setTimeout(() => {
            setAlertVisible(false);
        }, 5000);
        
    }


    const sendUserRequest = async () => {
        try {
            const response = await axios.post(`${SERVER_API_URL}/user/signup`, userRequest)
            console.log(response)
            setStatusCode(response.status)

        }
        catch (error) {
            setStatusCode(error.response.status)
            setError(error.response.data)
        }
    }

    const bigScreenCustomSize = {
        span: 4,
        offset: 4
    }

    const onChangeHandler = (event) => {
        setUserRequest((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        sendUserRequest()
    }

    console.log(statusCode)
    return (
        <Container>
            <PageTitle pageTitle="Sign Up" />
            <Row>
                <Col xl={bigScreenCustomSize} lg={bigScreenCustomSize} md={12} sm={12} xs={12}>
                    <h1 className="text-center p-5">
                        Sign up
                    </h1>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <input
                                className={error.username ? "form-control is-invalid" : "form-control"}
                                name="username"
                                type="text"
                                placeholder="Enter username"
                                onChange={onChangeHandler}
                            />
                            <p className="invalid-feedback">{error.username}</p>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <input
                                className={error.email ? "form-control is-invalid" : "form-control"}
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                onChange={onChangeHandler}
                            />
                            <p className="invalid-feedback">{error.email}</p>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <input
                                className={error.nid ? "form-control is-invalid" : "form-control"}
                                name="nid"
                                type="text"
                                placeholder="Enter national id"
                                onChange={onChangeHandler}
                            />
                            <p className="invalid-feedback">{error.nid}</p>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <input
                                className={error.password ? "form-control is-invalid" : "form-control"}
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={onChangeHandler}
                            />
                            <p className="invalid-feedback">{error.password}</p>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                className={error.confirmPassword ? "form-control is-invalid" : "form-control"}
                                name="confirmPassword"
                                type="password"
                                placeholder="confirm password"
                                onChange={onChangeHandler}
                            />
                            <p className="invalid-feedback">{error.confirmPassword}</p>

                        </Form.Group>


                        <Form.Group className="mb-3 text-center" controlId="formBasicCheckbox">
                            <Link to='/' className="btn btn-link">back to homepage</Link>
                            <Link to='/login' className="btn btn-link">Already have an account</Link>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100" onClick={showAlert}>
                            Sign Up
                        </Button>
                    </Form>
                    <br />
                    {statusCode === 200 ?
                        <Alert variant="success" show={alertVisible} className="text-center p-3"><b>User created successfully</b></Alert>
                        : ""
                    }

                    {statusCode === 500 ?
                        <Alert variant="danger" show={alertVisible} className="text-center p-3"><b>something went wrong</b></Alert>
                        : ""
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default SignUpPage