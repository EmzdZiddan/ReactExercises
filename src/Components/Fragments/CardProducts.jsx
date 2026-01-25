import Button from '../Elements/Button/Index';

const CardProducts = (props) => {
    const {children} = props;
    return(
    <div className="flex justify-center">
      <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
        {children}
      </div>
    </div>
    )
}
const Header = (props) => {
    const {img} = props;
    return( 
        <a><img src={img} alt='Product Image' className='p-8 rounded-t-lg'></img></a>  
    )
}

const Body = () => {
    return(
        <div className='px-5 pb-5'>
            <a href='#'><h5 className="text-xl font-semibold tracking-tight text-white">Sepatu Baru</h5></a>
            <p className='text-m text-white text-justify'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    )
}

const Footer = () => {
    return(
        <div className='flex items-center justify-between px-5 pb-5'>
            <span className="text-xl font-bold text-white">Rp 10.000.000</span>
            <Button>Add to Chart</Button>
        </div>
    )
}

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;