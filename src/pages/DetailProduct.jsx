import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react'
import {getDetailProduct} from '../services/product.service'


const DetailProductPage = () => {

    const {id} = useParams();
    const [product, setProduct] = useState ({})

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data)
        });
    },[id])


    return (
        <>
        {Object.keys(product).length > 0 && 
        <>
        <h1>Detail Product {id}</h1>
        <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image Section */}
            <div className="bg-gray-50 p-8 flex justify-center items-center">
            <img 
                src={product.image} 
                alt={product.title}
                className="max-w-sm h-96 object-contain"
            />
            </div>

            {/* Content Section */}
            <div className="p-6">
            {/* Category Badge */}
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {product.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <span className="ml-1 text-lg font-semibold text-gray-700">
                    {product.rating.rate}/5
                </span>
                </div>
                <span className="text-gray-500">({product.rating.count} reviews)</span>
            </div>

            {/* Price */}
            <h2 className="text-4xl font-bold text-green-600 mb-6">
                ${product.price}
            </h2>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-8">
                {product.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg">
                Add to Cart
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-200">
                Buy Now
                </button>
            </div>
            </div>
        </div>
        </div>
        </>
        }
        </>
    )
}

export default DetailProductPage