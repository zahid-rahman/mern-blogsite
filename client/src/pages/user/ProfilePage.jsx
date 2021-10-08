import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { saveUserDetailsAfterLogin } from '../../actions'
import { getUserDetails } from '../../utils/loginSession'
import profileImages from './../../images/profile_images.jpeg'
import './ProfilePage.css'
import DashboardLayout from '../../components/layout/DashboardLayout'
import CardContent from '../../components/user/CardContent'

const ProfilePage = () => {
    const loggedUserDetails = useSelector(state => state.loggedUserDetails);
    const dispatch = useDispatch()
    useEffect(() => {
        const userDetails = getUserDetails()
        dispatch(saveUserDetailsAfterLogin(userDetails));
        console.log(userDetails);
    }, []);

    const demoCardContent = () => {
        return (
            <>
                <h2>1</h2>
                <div className="btn btn-warning">view</div>
            </>
        )
    }

    console.log('hello')

    const profilePageContent = () => {
        return (
            <Container className="p-2">
                <Row>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                        <Card body>
                            <Image src={profileImages} rounded fluid className="profile_image"></Image>
                            <h3 className="profile_name">{loggedUserDetails.username}</h3>
                        </Card>

                    </Col>
                    <Col xl={9} lg={9} md={9} sm={12} xs={12}>
                        <Card className="text-center">
                            <Card.Header>
                                <b>Profile Information</b>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <CardContent title="total orders" content={demoCardContent} />
                                    <CardContent title="total orders" content={demoCardContent} />
                                    <CardContent title="total orders" content={demoCardContent} />

                                    <CardContent title="total orders" content={demoCardContent} />
                                    <CardContent title="total orders" content={demoCardContent} />
                                    <CardContent title="total orders" content={demoCardContent} />

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <DashboardLayout pageContent={profilePageContent} />
    )
}

export default ProfilePage
