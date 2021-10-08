import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import PageTitle from '../../components/head-title/PageTitle'
import { setUserDetails, setCookie } from '../../utils/loginSession'
const SERVER_API_URL = process.env.REACT_APP_SERVER_API

const LoginPage = () => {
    const [userRequest, setUserRequest] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState({});
    const [alertVisible, setAlertVisible] = useState(false)
    const [statusCode, setStatusCode] = useState(0)
    const history = useHistory()

    const bigScreenCustomSize = {
        span: 4,
        offset: 4
    }

    const showAlert = () => {
        setAlertVisible(true)
        setTimeout(() => {
            setAlertVisible(false);
        }, 6000);
    }

    const changeHandler = (event) => {
        setUserRequest((previousValue) => {
            return {
                ...previousValue,
                [event.target.name]: event.target.value
            }
        })
    }

    const loginSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(`${SERVER_API_URL}/user/login`, userRequest)
            console.log(response.data)
            setCookie(JSON.stringify(response.data))
            setUserDetails()
            window.location.href = '/user/profile'
        }
        catch (error) {
            console.error(error)
            setError(error.response.data)
            setStatusCode(error.response.status)
        }
    }

    const { email, password } = error;

    return (
        <Container>
            <PageTitle pageTitle="Login" />
            <Row>
                <Col xl={bigScreenCustomSize} lg={bigScreenCustomSize} md={12} sm={12} xs={12}>
                    <h1 className="text-center p-5">
                        Login
                    </h1>
                    <Form onSubmit={loginSubmitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                className={email ? "form-control is-invalid" : "form-control"}
                                name="email"
                                ype="email"
                                placeholder="Enter email"
                                onChange={changeHandler}
                            />
                            <p className="invalid-feedback">{email}</p>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                className={password ? "form-control is-invalid" : "form-control"}
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={changeHandler}
                            />
                            <p className="invalid-feedback">{password}</p>

                        </Form.Group>
                        <Form.Group className="mb-3 text-center" controlId="formBasicCheckbox">
                            <Link to='/' className="btn btn-link">back to homepage</Link>
                            <Link to='/signup' className="btn btn-link">Not registered yet</Link>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100" onClick={showAlert}>
                            Sign Up
                        </Button>
                    </Form>
                    <br />
                    {statusCode === 401 ?
                        <Alert variant="danger" show={alertVisible} className="text-center p-3"><b>wrong email and password</b></Alert>
                        : ""
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage