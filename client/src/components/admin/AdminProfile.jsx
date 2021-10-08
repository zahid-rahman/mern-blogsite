import React from 'react'
import AdminDashboardLayout from '../layout/AdminDashboardLayout';

const AdminProfile = () => {
    const renderAdminProfileContent = () => {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }

    return (
        <AdminDashboardLayout pageContent={renderAdminProfileContent} />
    )
}

export default AdminProfile;