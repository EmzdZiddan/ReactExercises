import { NavLink } from "react-router-dom";

const AuthLayout = (props) => {
    const {children,title,type} = props;
    return(
    <div className='flex justify-center items-center min-h-screen'>
        <div className="w-full max-w-xs bg-slate-50 p-10 rounded-2xl shadow-lg">
        <h1 className='text-blue-600'>{title}</h1>
        <p className='font-large text-slate-500 mb-8'>Welcome,please enter your details</p>

        {children}

        <p className="mt-4 tex-sm text-slate-500">
            {type === "login"
            ?"Don't have an account ?" 
            :"Have an account ? "}
            {type === "login" && 
            <NavLink to="/register" className="text-blue-600">register</NavLink>
            }
            {type === "register" && 
            <NavLink to="/login" className="text-blue-600">login</NavLink>
            }
        </p>
        </div>
    </div>
    )
}

export default AuthLayout;