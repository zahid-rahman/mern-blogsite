import React from 'react'
import { Col, Card } from 'react-bootstrap'

const CardContent = ({ title, content }) => {
    return (
        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
            <Card
                style={{ width: '18rem' }}
                className="card bg-dark mb-2 text-white"
            >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content()}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardContent;