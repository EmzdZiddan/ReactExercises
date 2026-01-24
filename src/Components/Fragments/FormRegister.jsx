import InputForm from '../Elements/Input/Index';
import Button from '../Elements/Button/Index';

const FormRegister = () => {
    return(
    <form action=''>
        <InputForm label="fullname" type='fullname' placeholder='insert your name here...' name='fullname'/>
        <InputForm label="email" type='email' placeholder='example@gmail.com' name='email'/>
        <InputForm label="password" type='password' placeholder='****' name='password'/>
        <InputForm label="confirm password" type='password' placeholder='****' name='password'/>
        <Button>Register</Button>
    </form>
    )
}
      
export default FormRegister;