import { NavLink } from "react-router-dom";
import Button from '../Elements/Button/Index'
import {useContext} from 'react';
import {DarkMode} from '../../context/DarkMode'

const AuthLayout = (props) => {
    const {children,title,type} = props;

    const {isDarkMode, setIsDarkMode}= useContext(DarkMode) 
    {console.log(isDarkMode)}
   
    return(
    <>
    <div className={`flex flex-row justify-end p-4 ${isDarkMode && 'bg-slate-700'}`} >
        <Button width='fit' onClick={() => setIsDarkMode(!isDarkMode) }>
        {isDarkMode ? 'Light' : 'Dark'}
        </Button>
    </div>

    <div className={`flex flex-col justify-center items-center min-h-screen ${isDarkMode && 'bg-slate-700'}`}>
    
        <div className="w-full max-w-xs bg-slate-100 p-10 rounded-2xl shadow-lg shadow-blue-100">
            
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
    </>
    )
}

export default AuthLayout;