
export const  TableUser = () => {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">User Table</h4>

                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>User</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                      </tr>
                    </thead>
                    <tbody>

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
  )
}
