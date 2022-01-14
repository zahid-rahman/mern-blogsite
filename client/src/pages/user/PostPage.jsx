import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import UserPostDetails from '../../components/user/UserPostDetails';

const PostPage = () => {
    const postPageContent = () => {
        return (
            <UserPostDetails />
        )
    }
    return (
        <DashboardLayout pageContent={postPageContent} />
    )
}

export default PostPage;