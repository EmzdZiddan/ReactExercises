import Button from './Components/Elements/Button/Index.jsx';
import InputForm from './Components/Elements/Input/Index.jsx';

function App () {
  return(
    <div className='flex justify-center items-center min-h-screen'>

    <div className="w-full max-w-xs">

      <h1 className='text-blue-600'>Register</h1>
      <p className='font-medium text-slate-500 mb-8'>Welcome,please enter your details</p>

      <form action=''>

        <InputForm label="email" type='email' placeholder='example@gmail.com' name='email'/>
        <InputForm label="password" type='password' placeholder='example@gmail.com' name='password'/>
        <Button>Login</Button>
      </form>

    </div>

    </div>
  )
}

export default App