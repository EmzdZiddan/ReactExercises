import InputForm from '../Elements/Input/Index';
import Button from '../Elements/Button/Index';

const FormLogin = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('email', e.target.email.value)
        localStorage.setItem('password', e.target.password.value)
        window.location.href = '/products';
    }

    return(
    <form onSubmit={handleLogin} >
        <InputForm label="email" type='email' placeholder='example@gmail.com' name='email'/>
        <InputForm label="password" type='password' placeholder='example@gmail.com' name='password'/>
        <Button type='submit' variant="bg-blue-600 w-full" >Login</Button>
    </form>
    )
}
      
export default FormLogin;