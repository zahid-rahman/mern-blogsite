import axios from 'axios'
import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import PageTitle from '../../components/head-title/PageTitle'
import { getCookie, setCookie } from '../../utils/loginSession'
const SERVER_API_URL = process.env.REACT_APP_SERVER_API

const LoginPage = (props) => {
    const [userRequest, setUserRequest] = useState({})
    const history = useHistory()
    const bigScreenCustomSize = {
        span: 4,
        offset: 4
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
            setCookie(response.data)
            // window.location.href="/dashboard"
            history.push('/dashboard')
            
        }
        catch (error) {
            console.error(error)
        }
    }

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
                                name="email"
                                ype="email"
                                placeholder="Enter email"
                                onChange={changeHandler}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 text-center" controlId="formBasicCheckbox">
                            <Link to='/' className="btn btn-link">back to homepage</Link>
                            <Link to='/signup' className="btn btn-link">Not registered yet</Link>
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

export default LoginPage