import React from 'react'
import MyPosts from '../../components/user/MyPosts'
import DashboardLayout from './../../components/layout/DashboardLayout'

const MyPostsPage = () => {

    const pageContent = () => {
        return (
            <MyPosts></MyPosts>
        )
    }

    return (
        <DashboardLayout pageContent={pageContent} />
    )
}

export default MyPostsPage