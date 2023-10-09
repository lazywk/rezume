import React from "react";

const AppRoutes = [
    {
        key: 'user',
        name: 'User',
        path: '/',
        component: React.lazy(() => import('views/user'))
    },
    {
        key: 'admin',
        name: 'Admin',
        path: '/admin',
        component: React.lazy(() => import('views/admin'))
    }
]

export default AppRoutes