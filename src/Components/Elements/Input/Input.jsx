const input = (props) => {
    const {type,placeholder,name} = props;
    return(
        <input type={type} 
        placeholder={placeholder}
        className='text-sm border border-slate-500 rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 focus:outline-none focus:border-blue-600'
        name={name}
        > 
    
        </input>
    )
}

export default input;