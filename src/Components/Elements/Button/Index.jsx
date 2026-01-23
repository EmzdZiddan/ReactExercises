const Button = (props) => {
  const {children, variant='bg-slate-500'} = props;
  return (
    <button className={`${variant} text-xl text-white text-bold rounded-xl px-5 py-2`}>
      {children}
    </button>
  )
}

export default Button;