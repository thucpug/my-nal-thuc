import { authHeader } from '../authentication'
import { apiUrl } from './../config'
export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
}

function login(username: string, password: string) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }

  return fetch(`${apiUrl}/v1/login`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user))

      return user
    })
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

function getAll() {
  const requestOptions: any = {
    method: 'GET',
    headers: authHeader(),
  }
  console.log(requestOptions.headers);
  return fetch(`${apiUrl}/v1/users`, requestOptions).then(handleResponse)
}

function getById(id: any) {
  const requestOptions: any = {
    method: 'GET',
    headers: authHeader(),
  }

  return fetch(`http://localhost:4000/users/${id}`, requestOptions).then(handleResponse)
}

function register(user: any) {
  const requestOptions: any = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  return fetch(`http://localhost:4000/users/register`, requestOptions).then(handleResponse)
}

function handleResponse(response: {
  text: () => Promise<any>
  ok: any
  status: number
  statusText: any
}) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        window.location.reload(true)
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
