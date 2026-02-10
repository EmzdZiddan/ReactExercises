import axios from 'axios'
import { jwtDecode } from 'jwt-decode' 

const Login = (data, callback) => {
    axios.post('https://fakestoreapi.com/auth/login', data)
        .then(res => callback('benar', res.data.token))
        .catch(err => callback(false, err.response.data))
}

const getUsername = (token) => {
    return jwtDecode(token).user
}

export default Login;
export { getUsername };