import React, { useState } from 'react'
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap'
import { getToken } from './../../utils/loginSession'
const API_SERVER_URL = process.env.REACT_APP_SERVER_API;

const CreatePost = () => {
    const [postData, setPostData] = useState({
        title: '',
        description: '',
        base64EncodedImage: ''
    });
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [alertVisible, setAlertVisible] = useState(false)
    const [statusCode, setStatusCode] = useState(0)

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
            setPostData((previousState) => {
                return {
                    ...previousState,
                    base64EncodedImage: reader.result
                }
            })
        }
    }

    const showAlert = () => {
        setAlertVisible(true)
        setTimeout(() => {
            setAlertVisible(false);
        }, 5000);

    }

    const createPostHandler = (event) => {
        if (event.target.type === 'file') {
            const file = event.target.files[0];
            previewFile(file)
        }
        setPostData((previousState) => {
            return {
                ...previousState,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmitPost = async (event) => {
        event.preventDefault();
        try {
            const headers = {
                Authorization: getToken()
            }
            const response = await axios({
                method: 'post',
                url: `${API_SERVER_URL}/post/create`,
                data: postData,
                headers
            });
            const result = response.data;
            setStatusCode(response.status)
            console.log(result);

        } catch (error) {
            setStatusCode(error.response.status)
            console.error(error)
        }
    }
    return (
        <>
            <Container className="p-5">
                <Row>
                    <Col lg={8}>
                        <h1 className="mb-4">Create Post</h1>
                        <Form onSubmit={handleSubmitPost}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter Title"
                                    name="title"
                                    onChange={createPostHandler} />
                            </Form.Group>

                            <Form.Group controlId="formFileLg" className="mb-3">
                                <Form.Control className="form-control" type="file" size="lg" name="postImage"
                                    onChange={createPostHandler} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control as="textarea" placeholder="Write your post" style={{ height: '200px' }}
                                    name="description"
                                    onChange={createPostHandler} />
                            </Form.Group>

                            <Button variant="dark" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <br />
                        {statusCode === 200 ?
                            <Alert variant="success" show={alertVisible} className="text-center p-3"><b>User created successfully</b></Alert>
                            : ""
                        }

                        {statusCode === 500 ?
                            <Alert variant="danger" show={alertVisible} className="text-center p-3"><b>something went wrong</b></Alert>
                            : ""
                        }
                    </Col>
                    <Col lg={4}>
                        <h3>Preview image</h3>
                        {previewSource ? <img src={previewSource} alt="chosen" style={{ height: "300px" }}></img> : ""}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CreatePost