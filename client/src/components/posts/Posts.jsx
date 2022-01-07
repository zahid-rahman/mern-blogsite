import {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import Post from './Post';

function Posts({ posts }) {

    const [totalShowedProduct, setTotalShowedProduct] = useState(6);

    const renderPost = posts.slice(0,totalShowedProduct).map((post) => {
        console.log(post)
        return <Col xl={4} lg={4} md={6} sm={12} key={Math.random()}>
            <Post post={post} />
        </Col>
    })

    const loadMoreEvent = (event) => {
        event.preventDefault();
        setTotalShowedProduct(previousValue => previousValue + 3);
    } 

    return (
        <Row>
            <br></br>
            {renderPost.length == 0 ? 
                <span className="no-post">No post found</span> : 
                renderPost
            }

            <div>
                <button onClick={loadMoreEvent} className="btn btn-dark m-auto d-block" style={{ width: "20%" }}>load more</button>
            </div>
        </Row>
    )
}

export default Posts
