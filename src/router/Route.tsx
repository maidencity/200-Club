import React, { FunctionComponent } from 'react'
import { Redirect, Route as ReactRoute, RouteProps as ReactRouteProps } from 'react-router-dom'
// import { useAuthContext } from '../components/auth/context'

export type RouteProps = ReactRouteProps & {
    name?: string
    private?: Boolean
    redirectTo?: string
    roles?: string[]
}

export type RouteState = {}

export const Route: FunctionComponent<RouteProps> = (props: RouteProps) => {

    // let ctx = useAuthContext()

    // if (props.private && !ctx.state?.token) {
    //     return <Redirect to={'/login'}  />
    // } else {
        return <ReactRoute {...props} />
    // }

}

