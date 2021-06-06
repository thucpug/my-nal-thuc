export default () => {
  return (
    <div className="container-scroller">
      {/* partial:../../partials/_navbar.html */}
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo mr-5" href="../../index.html">
            <img src="../../images/logo.svg" className="mr-2" alt="logo" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="../../index.html">
            <img src="../../images/logo-mini.svg" alt="logo" />
          </a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span className="ti-view-list" />
          </button>
          <ul className="navbar-nav mr-lg-2">
            <li className="nav-item nav-search d-none d-lg-block">
              <div className="input-group">
                <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                  <span className="input-group-text" id="search">
                    <i className="ti-search" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="navbar-search-input"
                  placeholder="Search now"
                  aria-label="search"
                  aria-describedby="search"
                />
              </div>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown mr-1">
              <a
                className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                id="messageDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="ti-email mx-0" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="messageDropdown"
              >
                <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                <a className="dropdown-item">
                  <div className="item-thumbnail">
                    <img src="../../images/faces/face4.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="item-content flex-grow">
                    <h6 className="ellipsis font-weight-normal">David Grey</h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      The meeting is cancelled
                    </p>
                  </div>
                </a>
                <a className="dropdown-item">
                  <div className="item-thumbnail">
                    <img src="../../images/faces/face2.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="item-content flex-grow">
                    <h6 className="ellipsis font-weight-normal">Tim Cook</h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      New product launch
                    </p>
                  </div>
                </a>
                <a className="dropdown-item">
                  <div className="item-thumbnail">
                    <img src="../../images/faces/face3.jpg" alt="image" className="profile-pic" />
                  </div>
                  <div className="item-content flex-grow">
                    <h6 className="ellipsis font-weight-normal"> Johnson</h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      Upcoming board meeting
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="ti-bell mx-0" />
                <span className="count" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="notificationDropdown"
              >
                <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                <a className="dropdown-item">
                  <div className="item-thumbnail">
                    <div className="item-icon bg-success">
                      <i className="ti-info-alt mx-0" />
                    </div>
                  </div>
                  <div className="item-content">
                    <h6 className="font-weight-normal">Application Error</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">Just now</p>
                  </div>
                </a>
                <a className="dropdown-item">
                  <div className="item-thumbnail">
                    <div className="item-icon bg-warning">
                      <i className="ti-settings mx-0" />
                    </div>
                  </div>
                  <div className="item-content">
                    <h6 className="font-weight-normal">Settings</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">Private message</p>
                  </div>
                </a>
                <a className="dropdown-item">
                  <div className="item-thumbnail">
                    <div className="item-icon bg-info">
                      <i className="ti-user mx-0" />
                    </div>
                  </div>
                  <div className="item-content">
                    <h6 className="font-weight-normal">New user registration</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">2 days ago</p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item nav-profile dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                id="profileDropdown"
              >
                <img src="../../images/faces/face28.jpg" alt="profile" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                <a className="dropdown-item">
                  <i className="ti-settings text-primary" />
                  Settings
                </a>
                <a className="dropdown-item">
                  <i className="ti-power-off text-primary" />
                  Logout
                </a>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="ti-view-list" />
          </button>
        </div>
      </nav>
      {/* partial */}
      <div className="container-fluid page-body-wrapper">
        {/* partial:../../partials/_sidebar.html */}
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="../../index.html">
                <i className="ti-shield menu-icon" />
                <span className="menu-title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#ui-basic"
                aria-expanded="false"
                aria-controls="ui-basic"
              >
                <i className="ti-palette menu-icon" />
                <span className="menu-title">UI Elements</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {' '}
                    <a className="nav-link" href="../../pages/ui-features/buttons.html">
                      Buttons
                    </a>
                  </li>
                  <li className="nav-item">
                    {' '}
                    <a className="nav-link" href="../../pages/ui-features/typography.html">
                      Typography
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../pages/forms/basic_elements.html">
                <i className="ti-layout-list-post menu-icon" />
                <span className="menu-title">Form elements</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../pages/charts/chartjs.html">
                <i className="ti-pie-chart menu-icon" />
                <span className="menu-title">Charts</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../pages/tables/basic-table.html">
                <i className="ti-view-list-alt menu-icon" />
                <span className="menu-title">Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../pages/icons/themify.html">
                <i className="ti-star menu-icon" />
                <span className="menu-title">Icons</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#auth"
                aria-expanded="false"
                aria-controls="auth"
              >
                <i className="ti-user menu-icon" />
                <span className="menu-title">User Pages</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {' '}
                    <a className="nav-link" href="../../pages/samples/login.html">
                      {' '}
                      Login{' '}
                    </a>
                  </li>
                  <li className="nav-item">
                    {' '}
                    <a className="nav-link" href="../../pages/samples/login-2.html">
                      {' '}
                      Login 2{' '}
                    </a>
                  </li>
                  <li className="nav-item">
                    {' '}
                    <a className="nav-link" href="../../pages/samples/register.html">
                      {' '}
                      Register{' '}
                    </a>
                  </li>
                  <li className="nav-item">
                    {' '}
                    <a className="nav-link" href="../../pages/samples/register-2.html">
                      {' '}
                      Register 2{' '}
                    </a>
                  </li>
                  <li className="nav-item">
                    {' '}
                    <a className="nav-link" href="../../pages/samples/lock-screen.html">
                      {' '}
                      Lockscreen{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../documentation/documentation.html">
                <i className="ti-write menu-icon" />
                <span className="menu-title">Documentation</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* partial */}
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Striped Table</h4>
                    <p className="card-description">
                      Add class <code>.table-striped</code>
                    </p>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>User</th>
                            <th>First name</th>
                            <th>Progress</th>
                            <th>Amount</th>
                            <th>Deadline</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-1">
                              <img src="../../images/faces/face1.jpg" alt="image" />
                            </td>
                            <td>Herman Beck</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: '25%' }}
                                  aria-valuenow={25}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td>$ 77.99</td>
                            <td>May 15, 2015</td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src="../../images/faces/face2.jpg" alt="image" />
                            </td>
                            <td>Messsy Adam</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{ width: '75%' }}
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td>$245.30</td>
                            <td>July 1, 2015</td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src="../../images/faces/face3.jpg" alt="image" />
                            </td>
                            <td>John Richards</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: '90%' }}
                                  aria-valuenow={90}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td>$138.00</td>
                            <td>Apr 12, 2015</td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src="../../images/faces/face4.jpg" alt="image" />
                            </td>
                            <td>Peter Meggik</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: '50%' }}
                                  aria-valuenow={50}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td>$ 77.99</td>
                            <td>May 15, 2015</td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src="../../images/faces/face5.jpg" alt="image" />
                            </td>
                            <td>Edward</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{ width: '35%' }}
                                  aria-valuenow={35}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td>$ 160.25</td>
                            <td>May 03, 2015</td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src="../../images/faces/face6.jpg" alt="image" />
                            </td>
                            <td>John Doe</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: '65%' }}
                                  aria-valuenow={65}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td>$ 123.21</td>
                            <td>April 05, 2015</td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src="../../images/faces/face7.jpg" alt="image" />
                            </td>
                            <td>Henry Tom</td>
                            <td>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: '20%' }}
                                  aria-valuenow={20}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </td>
                            <td>$ 150.00</td>
                            <td>June 16, 2015</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content-wrapper ends */}
          {/* partial:../../partials/_footer.html */}
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
                Copyright © bootstrapdash.com 2020
              </span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                {' '}
                Free{' '}
                <a href="https://www.bootstrapdash.com/" target="_blank">
                  Bootstrap dashboard templates
                </a>{' '}
                from Bootstrapdash.com
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
