const Button = (props) => {
  const {children, variant='bg-blue-600 hover:bg-blue-800', onClick, type='button'} = props;
  return (
    <button className={`${variant} flex items-center justify-center text-lg text-white text-bold rounded-xl px-3 py-2`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button;