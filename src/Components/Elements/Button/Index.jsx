const Button = (props) => {
  const {children, variant='bg-blue-600'} = props;
  return (
    <button className={`${variant} w-full flex items-center justify-center text-lg text-white text-bold rounded-xl px-3 py-2`}>
      {children}
    </button>
  )
}

export default Button;