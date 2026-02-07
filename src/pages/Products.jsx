import CardProducts from '../Components/Fragments/CardProducts.jsx';
import Button from '../Components/Elements/Button/Index.jsx';
import { useState,useEffect} from 'react';

const productsData = [
    {
        id: 11,
        img: '/img/1.jpg',
        title: 'Sepatu Baru',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 10000000
    },
    {
        id: 12,
        img: '/img/1.jpg',
        title: 'Sepatu Lama',
        description: 'dlorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 5000000
    },
    {
        id: 13,
        img: '/img/1.jpg',
        title: 'Sepatu hybrid',
        description: 'dlorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 2000000
    }
]

const ProductsPage = () => {

    const email = localStorage.getItem('email');
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    }

    const [cart, setCart] = useState([]);
    const[totalPrice, setTotalPrice] = useState(0)

   
    useEffect( () => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = productsData.find((p) => p.id === item.id);
                return acc + product.price * item.quantity; // ✅ Ganti qty jadi quantity
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);


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



  return (
    <>
  
    <div className='flex flex-row p-4 gap-10 items-center justify-end  bg-blue-900'>
        <div className="text-white text-bold">{email}</div>
        <Button type="button" width='w-fit' col='black' onClick={handleLogout}>Logout</Button>
    </div>

    <div className="flex flex-row p-4">
        
        <div className="w-2/3 flex flex-wrap gap-4 justify-items-center">
            {productsData.map((product) =>(
            <CardProducts key={product.id}>
                <CardProducts.Header img={product.img}/>
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
                    {cart.map((item)=> {
                        const product = productsData.find((p) => p.id === item.id);
                        return (
                            <tr key={item.id}>
                                <td>{product.title}</td>
                                <td>{product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                                <td className="text-center">{item.quantity}</td>
                                <td>{(product.price*item.quantity).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                            </tr>
                        );
                    } )}

                    <tr >
                        <td colSpan={3}><b>Total Price</b></td>
                        {totalPrice.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}
                        
                    </tr>
                </tbody>
            </table>
            
           
        </div>

    </div>
    </>
  );
};

export default ProductsPage;