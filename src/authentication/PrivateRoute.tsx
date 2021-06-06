import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import jwt_decode from "jwt-decode";

const USERNAME_DEFAULT = "Est Rouge Test"
const PrivateRouteV2 = ({component, ...rest}: any) => {
    const ValidJWT = () => {
        var temp = localStorage.getItem('user');
        if (temp === null) {
            return false;
        } else {
            let user = JSON.parse(temp ? temp : '');
            var decoded: {
                user: {
                    username: string;
                }
            } = jwt_decode(user.token);
            console.log(decoded);
            if ((decoded.user.username === USERNAME_DEFAULT)) {
                return true
            } else {
                return false
            }

        }

    }

    const routeComponent = (props: any) =>
        ValidJWT() ? (
            React.createElement(component, props)
        ) : (
            <Redirect to={{pathname: '/login'}}/>
        )
    return <Route {...rest} render={routeComponent}/>
}
export {PrivateRouteV2}
