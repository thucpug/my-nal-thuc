import React from 'react'
import { Route, Redirect } from 'react-router-dom'
const PrivateRouteV2 = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    localStorage.getItem('user') ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    )
  return <Route {...rest} render={routeComponent} />
}
export { PrivateRouteV2 }
