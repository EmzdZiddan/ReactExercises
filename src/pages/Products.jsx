import CardProducts from '../Components/Fragments/CardProducts.jsx';
import Button from '../Components/Elements/Button/Index.jsx';
import { useState,useEffect, useRef} from 'react';
import getProducts from '../services/product.services'



const ProductsPage = () => {

    const email = localStorage.getItem('email');
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    }

    const [cart, setCart] = useState([]);
    const[totalPrice, setTotalPrice] = useState(0)
    const [productsData,setProductsData] = useState([])

    useEffect(() => {
        getProducts((data) => {
            setProductsData(data)
        })
    })


   
    useEffect( () => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    useEffect(() => {
        if (productsData.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = productsData.find((p) => p.id === item.id);
                return acc + product.price * item.quantity;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, productsData]);


    const handleAddToCart = (id) =>  {
        if(cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) => 
                    item.id === id ? {...item, quantity: item.quantity + 1} : item
                )
            ) 
        } else {
            setCart([...cart, {id: id, quantity: 1}]);
        }
    }

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if(cart.length > 0){
            totalPriceRef.current.style.display = 'table-row';
        }else {
            totalPriceRef.current.style.display = 'none';
        }
    },[cart]);

  return (
    <>
    <div className='flex flex-row p-4 gap-10 items-center justify-end  bg-blue-900'>
        <div className="text-white text-bold">{email}</div>
        <Button type="button" width='w-fit' col='black' onClick={handleLogout}>Logout</Button>
    </div>

    <div className="flex flex-row p-4">
        
        <div className="w-2/3 flex flex-wrap gap-4 justify-items-center">
            {productsData.length > 0 && 
            productsData.map((product) =>(
            <CardProducts key={product.id}>
                <CardProducts.Header img={product.image}/>
                <CardProducts.Body title={product.title} description={product.description}></CardProducts.Body>
                <CardProducts.Footer 
                price={product.price} 
                id={product.id} 
                onClick={() => handleAddToCart(product.id)}>
                </CardProducts.Footer>
            </CardProducts> 
            ))}
        </div>

        <div className="w-1/3">
            <h1 className="text-3xl font-bold">Cart</h1>
            <table className="w-full text-sm ">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {productsData.length > 0 && 
                        cart.map((item)=> {
                        const product = productsData.find((p) => p.id === item.id);
                        return (
                            <tr key={item.id}>
                                <td>{product.title.substring(0,20)}...</td>
                                <td>{product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
                                <td className="text-center">{item.quantity}</td>
                                <td>{(product.price*item.quantity).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
                            </tr>
                        );
                    } )}

                    <tr ref={totalPriceRef}>
                        
                        <td colSpan={3}><b>Total Price</b></td>
                        <b>{totalPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</b>
                        
                    </tr>
                </tbody>
            </table>
            
           
        </div>

    </div>
    </>
  );
};

export default ProductsPage;