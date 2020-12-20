import {
  post
} from './Api';

const register = async ({
  email,
  password
}) => {
  return await post('register', {
    email,
    password
  })
}

const login = async ({
  email,
  password
}) => {
  return await post('login', {
    email,
    password
  })
}

export default {
  register,
  login
}