export function authHeader() {
  // return authorization header with jwt token
  var temp = localStorage.getItem('user')
  let user = JSON.parse(temp ? temp : '')

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token }
  } else {
    return {}
  }
}
