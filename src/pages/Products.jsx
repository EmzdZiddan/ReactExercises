import CardProducts from '../Components/Fragments/CardProducts.jsx';
import Button from '../Components/Elements/Button/Index.jsx';
import { useState } from 'react';

const productsData = [
    {
        id: 1,
        img: '/img/1.jpg',
        title: 'Sepatu Baru',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 10000000
    },
    {
        id: 2,
        img: '/img/1.jpg',
        title: 'Sepatu Lama',
        description: 'dlorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 5000000
    },
    {
        id: 3,
        img: '/img/1.jpg',
        title: 'Sepatu hybrid',
        description: 'dlorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 5000000
    }
]

const ProductsPage = () => {

    const email = localStorage.getItem('email');
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    }

    const [cart, setCart] = useState([{
        title: 'Sepatu Lama',
        quantity: 1
    }]);
    
    const handleAddToCart = (id, qty) =>  {
        setCart([...cart, {
            id: id,
            qty: qty
        }])
    }



  return (
    <>
    <div className='flex flex-row p-4 gap-10 items-center justify-end  bg-blue-900'>
        <div className="text-white text-bold">{email}</div>
        <Button type="button" variant='bg-black' onClick={handleLogout}>Logut</Button>
    </div>

    <div className="flex flex-row p-4">
        <div className="w-3/4 flex flex-wrap gap-4 justify-items-center">
            {productsData.map((product) =>(
            <CardProducts key={product.id}>
                <CardProducts.Header img={product.img}/>
                <CardProducts.Body title={product.title} description={product.description}></CardProducts.Body>
                <CardProducts.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart}></CardProducts.Footer>
            </CardProducts> 
            ))}
        </div>
        <div className="w-1/4">
            <h1 className="text-3xl font-bold">Cart</h1>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>{item.id}</li>
                ))}
            </ul>
        </div>
    </div>
    </>
  );
};

export default ProductsPage;