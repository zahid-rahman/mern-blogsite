import React from 'react'
import CreatePost from '../../components/posts/CreatePost'
import PageTitle from '../../components/head-title/PageTitle'

const CreatePostPage = () => {
    return (
        <div>
            <PageTitle pageTitle="create post"></PageTitle>
            <CreatePost></CreatePost>
        </div>
    )
}

export default CreatePostPage