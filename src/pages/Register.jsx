import AuthLayout from '../Components/Layout/AuthLayouts'
import FormRegister from '../Components/Fragments/FormRegister';


const RegisterPage = () => {
    return(
    <AuthLayout title='Register' type='register'> 
        <FormRegister></FormRegister>
    </AuthLayout>
    )
}

export default RegisterPage;