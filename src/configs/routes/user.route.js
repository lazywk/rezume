import React from "react";

const UserRoutes = [
    {
        key: 'home',
        name: 'Home',
        path: '/',
        component: React.lazy(() => import('pages/user/home'))
    },
    {
        key: 'blog',
        name: 'Blog',
        path: '/blog',
        component: React.lazy(() => import('pages/user/blog'))
    },
    {
        key: 'portfolio',
        name: 'Portfolio',
        path: '/portfolio',
        component: React.lazy(() => import('pages/user/portfolio'))
    }
]


export default UserRoutes