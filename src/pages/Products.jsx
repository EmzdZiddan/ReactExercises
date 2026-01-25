import CardProducts from '../Components/Fragments/CardProducts.jsx';
import Button from '../Components/Elements/Button/Index.jsx';

const productsData = [
    {
        id: 1,
        img: '/img/1.jpg',
        title: 'Sepatu Baru',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 'Rp 10.000.000'
    },
    {
        id: 2,
        img: '/img/1.jpg',
        title: 'Sepatu Lama',
        description: 'dlorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 'Rp 5.000.000'
    }
]

const ProductsPage = () => {
    const email = localStorage.getItem('email');
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    }

  return (
    <>
    <div className='flex flex-row p-4 gap-10 items-center justify-end  bg-blue-900'>
        <div className="text-white text-bold">{email}</div>
        <Button type="button" variant='bg-black' onClick={handleLogout}>Logut</Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center p-4">
        {productsData.map((product) =>(
        <CardProducts key={product.id}>
            <CardProducts.Header img={product.img}/>
            <CardProducts.Body title={product.title} description={product.description}></CardProducts.Body>
            <CardProducts.Footer price={product.price}></CardProducts.Footer>
        </CardProducts> 
        ))}
    </div>
    </>
  );
};

export default ProductsPage;