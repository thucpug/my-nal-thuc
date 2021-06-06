import React, { useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Login from './pages/user/login/Login'
import { history } from './authentication'
import { alertActions } from './redux/actions'
import { PrivateRoute, PrivateRouteV2 } from './authentication'
import dashboard from './pages/dashboard/Dashboard'
import p404 from './pages/404'
import RegisterPage from './pages/user/register/Register'

function App() {
  const alert = useSelector((state: any) => state.alert)
  const dispatch = useDispatch()
  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear())
    })
  }, [])
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <PrivateRouteV2 exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterPage} />
          <PrivateRouteV2 exact path="/home" component={dashboard} />
          <Route path="/404" component={p404} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
