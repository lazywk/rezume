import React from "react";

const AdminRoutes = [
    {
        key: 'home',
        name: 'Home',
        path: '/',
        component: React.lazy(() => import('pages/admin/home'))
    },
    {
        key: 'create-blog',
        name: 'Create Blog',
        path: '/create-blog',
        component: React.lazy(() => import('pages/admin/create-blog'))
    },
    {
        key: 'create-portfolio',
        name: 'Create Portfolio',
        path: '/create-portfolio',
        component: React.lazy(() => import('pages/admin/create-portfolio'))
    },
]

export default AdminRoutes