export default () => {
  return (
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
  )
}
