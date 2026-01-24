import AuthLayout from '../Components/Layout/AuthLayouts'
import FormRegister from '../Components/Fragments/FormRegister';
import {NavLink} from "react-router";

const RegisterPage = () => {
    return(
    <AuthLayout title='Register'> 
        <FormRegister></FormRegister>
        <p className="mt-4 tex-sm text-slate-500">Have an account? 
            <NavLink to="/login" className="text-blue-600">login</NavLink>
        </p>
    </AuthLayout>

    )
}

export default RegisterPage;