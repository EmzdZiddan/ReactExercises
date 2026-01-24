import AuthLayout from '../Components/Layout/AuthLayouts'
import FormLogin from '../Components/Fragments/FormLogin';
import { NavLink } from "react-router";

const LoginPage = () => {
    return(
    <AuthLayout title='Login' > 
        <FormLogin></FormLogin>
        <p className="mt-4 tex-sm text-slate-500">Dont have an account? 
            <NavLink to="/register" className="text-blue-600">register</NavLink>
        </p>
    </AuthLayout>
    )
}

export default LoginPage;