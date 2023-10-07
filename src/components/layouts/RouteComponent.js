import React from 'react'

export default function RouteComponent({ component: Component, route, ...props }) {
    return <Component {...props} />
}
