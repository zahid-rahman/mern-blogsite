import ShowPost from './ShowPost'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPosts } from './../../actions/index'
import {getToken} from '../../utils/loginSession'
import './MyPosts.css'
const API_SERVER_URL = process.env.REACT_APP_SERVER_API;

const MyPosts = () => {

    const userPosts = useSelector(state => state.userPosts);
    const [visibleProduct, setVisibleProduct] = useState(4)
    const dispatch = useDispatch();

    const getUserPostsDetails = async () => {
        const response = await axios({
            method: 'GET',
            url: `${API_SERVER_URL}/post/list`,
            headers: {
                Authorization: getToken().toString()
            }
        });

        const result = response.data;
        dispatch(fetchUserPosts(result));
    }

    const loadMore = (event) => {
        event.preventDefault();
        setVisibleProduct(previousValue => previousValue + 4);
    }

    useEffect(() => {
        getUserPostsDetails()
    }, []);

    const renderPosts = userPosts.slice(0,visibleProduct).map((post) => {
        return (
            <>
                <ShowPost post={post} key={Math.random()}></ShowPost>
                <br />
            </>
        )
    })

    return (
        <>
            <br />
            {renderPosts.length <= 0 ?
                <span className="no-post">No post found</span>
               :
              <div>
                {renderPosts}
                <div className="m-auto w-50 d-block">
                    <button className="btn btn-dark m-auto w-50 d-block" onClick={loadMore}>load more</button>
                </div>
                <br />
              </div>
            }

        </>
    )
}

export default MyPosts
