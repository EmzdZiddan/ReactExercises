import axios from 'axios'
import { jwtDecode } from 'jwt-decode'  // ← Ubah ini

const Login = (data, callback) => {
    axios.post('https://fakestoreapi.com/auth/login', data)
        .then(res => callback(true, res.data.token))
        .catch(err => callback(false, err.response.data))
}

const getUsername = (token) => {
    const decoded = jwtDecode(token)
    return decoded.user
}

export default Login;
export { getUsername };