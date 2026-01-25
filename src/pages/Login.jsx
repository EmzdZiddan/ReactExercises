import AuthLayout from '../Components/Layout/AuthLayouts'
import FormLogin from '../Components/Fragments/FormLogin';

const LoginPage = () => {
    return(
    <AuthLayout title='Login' type='login'> 
        <FormLogin></FormLogin>
    </AuthLayout>
    )
}



export default LoginPage;