import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { saveUserDetailsAfterLogin } from '../../actions'
import { getUserDetails } from '../../utils/loginSession'
import profileImages from './../../images/profile_images.jpeg'
import './ProfilePage.css'
import DashboardLayout from '../../components/layout/DashboardLayout'

const ProfilePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const userDetails = getUserDetails()
        dispatch(saveUserDetailsAfterLogin(userDetails))
    }, [])

    const profilePageContent = () => {
        return (
            <Container>
                <Row>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                        <Card body>
                            <Image src={profileImages} rounded fluid className="profile_image"></Image>
                            <h3 className="profile_name">Zahid rahman</h3>
                        </Card>

                    </Col>
                    <Col xl={9} lg={9} md={9} sm={12} xs={12}>
                        <Card className="text-center">
                            <Card.Header>Profile Information</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Card
                                            style={{ width: '18rem' }}
                                            className="card bg-dark mb-2 text-white"
                                        >
                                            <Card.Body>
                                                <Card.Title>Total orders</Card.Title>
                                                <Card.Text>
                                                    <h2>1</h2>
                                                    <div className="btn btn-warning">view</div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Card
                                            style={{ width: '18rem' }}
                                            className="card bg-dark mb-2 text-white"
                                        >
                                            <Card.Body>
                                                <Card.Title>Total orders</Card.Title>
                                                <Card.Text>
                                                    <h2>1</h2>
                                                    <div className="btn btn-warning">view</div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <Card
                                            style={{ width: '18rem' }}
                                            className="card bg-dark mb-2 text-white"
                                        >
                                            <Card.Body>
                                                <Card.Title>Total orders</Card.Title>
                                                <Card.Text>
                                                    <h2>1</h2>
                                                    <div className="btn btn-warning">view</div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }




    return (
        <DashboardLayout />
    )
}

export default ProfilePage
