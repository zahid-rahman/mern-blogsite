import { React, useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import { getToken } from '../../utils/loginSession';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserPostDetails.css';
const API_SERVER_URL = process.env.REACT_APP_SERVER_API;

const UserPostDetails = () => {
    const params = useParams();
    const [userPost, setUserPost] = useState({
        user: {}
    });

    useEffect(() => {
        const { postId } = params;
        const getUserPostDetailsById = (postId) => {
            axios({
                method: 'GET',
                url: `${API_SERVER_URL}/post/find/${postId}`,
                headers: {
                    Authorization: getToken().toString()
                }
            })
                .then((response) => {
                    setUserPost(() => {
                        return {
                            ...response.data,
                            user: response.data.user
                        }
                    })
                })
                .catch((error) => {
                    console.error(error)
                })
        }
        getUserPostDetailsById(postId);


    }, []);
    console.log(userPost);
    const { imagePublicId, date, description, title, user } = userPost;
    const { username: bloggerName } = user;
    return (
        <div>
            <div className="center p-5">
                <Image
                    cloudName="zskart"
                    height="600"
                    width="1000"
                    publicId={imagePublicId}
                    crop="scale"
                />

                <h2 className="pt-3 post-title">{title}</h2>
                <span>by</span> <a href="#">{bloggerName}</a> <span>created at {date}</span>
                <p className="post-description pt-5">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default UserPostDetails;