import Button from '../Elements/Button/Index';
import { NavLink } from "react-router-dom";

const CardProducts = (props) => {
    const {children} = props;
    return(

    <div className="w-full max-w-sm  bg-gray-800 border border-gray-700 rounded-lg shadow">
        {children}
    </div>
    )
}
const Header = (props) => {
    const {img,id} = props;
    return( 
        <NavLink to ={`${id}`}><img src={img} alt='Product Image' className='p-8 rounded-t-lg h-50 w-full object-contain'></img></NavLink>  
    )
}

const Body = (props) => {
    const {title, description} = props;
    return(
        <div className='px-5 pb-5'>
            <a href='#'><h5 className="text-xl font-semibold tracking-tight text-white">{title.substring(0,30)}...</h5></a>
            <p className='text-m text-white text-justify'>
            {description.substring(0, 50)}...
            </p>
        </div>
    )   
}

const Footer = (props) => {
    const {price, onClick}   = props;    
    return(
        <div className='flex items-center justify-between px-5 pb-5'>
            <span className="text-xl font-bold text-white">{price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span>
            <Button width='fit' onClick={onClick}>Add to Chart</Button>
        </div>
    )
}

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;