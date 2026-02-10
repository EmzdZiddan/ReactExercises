import InputForm from '../Elements/Input/Index';
import Button from '../Elements/Button/Index';
import Login from '../../services/auth.service'
import {useState} from 'react';

const FormLogin = () => {

    const [loginFailed,setLoginFailed] = useState('')


    const handleLogin = (e) => {
        e.preventDefault();

        const data = {
        username : e.target.username.value,
        password : e.target.password.value};

        
        Login(data,(status, res) => {
    
            if(status){
                localStorage.setItem('token',res)
                window.location.href = '/product';
            }else{
               setLoginFailed(res)
            }

        } )
    }

    return(
    <form onSubmit={handleLogin} >
        <InputForm label="username" type='text' placeholder='example@gmail.com' name='username'/>
        <InputForm label="password" type='password' placeholder='example@gmail.com' name='password'/>
        <Button type='submit' variant="bg-blue-600 w-full" >Login</Button>
        {loginFailed && <p className='text-sm text-red-600 mt-2'>{loginFailed}</p>}
    </form>
    )
}
      
export default FormLogin;


// donero
// ewedon