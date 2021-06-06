import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { userActions } from './././../../../redux/actions'
export default () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const { username, password } = inputs
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    dispatch(userActions.logout())
  }, [])

  function handleChange(e: { target: { name: any; value: any } }) {
    const { name, value } = e.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
  }
  function handleSubmit(e: any) {
    e.preventDefault()

    setSubmitted(true)
    if (username && password) {
      // get return url from location state or default to home page
      const { from }: any = location.state || { from: { pathname: '/home' } }
      dispatch(userActions.login(username, password, from))
    }
  }

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src="../../images/logo.svg" alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <form className="pt-3" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mt-3">
                    <button
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      // href="../../index.html"
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        Keep me signed in
                      </label>
                    </div>
                    <a href="#" className="auth-link text-black">
                      Forgot password?
                    </a>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="ti-facebook mr-2" />
                      Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{' '}
                    <Link to="register" className="text-primary">
                      Create
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>
  )
}
