import { instance } from '@/api'

// sign up api
function signupUser(userData) {
  return instance.post('signup', userData)
}

// login api
function loginUser(userData) {
  return instance.post('login', userData)
}

export { signupUser, loginUser }
