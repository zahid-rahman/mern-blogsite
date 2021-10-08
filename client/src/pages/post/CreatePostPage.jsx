import React from 'react'
import CreatePost from '../../components/posts/CreatePost'
import PageTitle from '../../components/head-title/PageTitle'
import DashboardLayout from '../../components/layout/DashboardLayout'

const CreatePostPage = () => {
    const pageContent = () => {
        return (
            <CreatePost></CreatePost>
        )
    }
    return (
        <div>
            <PageTitle pageTitle="create post"></PageTitle>
            <DashboardLayout pageContent={pageContent} />
        </div>
    )
}

export default CreatePostPage