import { Row, Col, Container } from 'react-bootstrap'
import Banner from '../Banner/Banner'
import NavigationBar from '../Navbar/NavigationBar'
import bannerImage from '../../images/blog-banner.jpg'

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner image={bannerImage}></Banner>
            <div className="p-5">
                <span className="text-center d-block p-1 m-auto" style={{ borderBottom: '4px solid red',fontSize:'30px', fontWeight:'600', width:'20%'}}>Our blog</span>
            </div>
            <Container className="text-center">
                <Row>
                    <Col>
                        <h3>title 1</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum est ullam suscipit repellat id? Voluptatum quidem beatae cum optio?
                        </p>
                    </Col>
                    <Col>
                        <h3>title 2</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum est ullam suscipit repellat id? Voluptatum quidem beatae cum optio?
                        </p>
                    </Col>
                    <Col>
                        <h3>title 3</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum est ullam suscipit repellat id? Voluptatum quidem beatae cum optio?
                        </p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Home;