import { Image, Row, Col, Container } from 'react-bootstrap'
import './Banner.css'

const Banner = ({ image }) => {
    return (
        <Container fluid>
            <Row>
                <Col xl={2} ></Col>
                <Col xl={8} md={12} sm={12} >
                    <Image src={image} className="banner-image" fluid />
                </Col>
                <Col xl={2}></Col>
            </Row>
        </Container>
    )
}

export default Banner;