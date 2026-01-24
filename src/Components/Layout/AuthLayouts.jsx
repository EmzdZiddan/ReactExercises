const AuthLayout = (props) => {
    const {children,title} = props;
    return(
    <div className='flex justify-center items-center min-h-screen'>
        <div className="w-full max-w-xs bg-slate-50 p-10 rounded-2xl shadow-lg">
        <h1 className='text-blue-600'>{title}</h1>
        <p className='font-large text-slate-500 mb-8'>Welcome,please enter your details</p>
        {children}
        </div>
    </div>
    )
}

export default AuthLayout;