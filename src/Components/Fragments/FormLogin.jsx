import InputForm from '../Elements/Input/Index';
import Button from '../Elements/Button/Index';

const FormLogin = () => {
    return(
    <form action='' >
        <InputForm label="email" type='email' placeholder='example@gmail.com' name='email'/>
        <InputForm label="password" type='password' placeholder='example@gmail.com' name='password'/>
        <Button>Login</Button>
    </form>
    )
}
      
export default FormLogin;