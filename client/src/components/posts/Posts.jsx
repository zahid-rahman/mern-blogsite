import { Col, Row } from 'react-bootstrap'
import Post from './Post'

function Posts({ totalPosts }) {

    const posts = []
    for (let index = 0; index < totalPosts; index++) {
        const element = "$";
        posts.push(element)
    }
    const renderPost = posts.map((post) => {
        return <Col xl={4} lg={4} md={6} sm={12} key={Math.random()}>
            <Post />
        </Col>
    })

    return (
        <Row>
            <br></br>
            {renderPost}
        </Row>
    )
}

export default Posts
