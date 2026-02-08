import getProducts from '../services/product.services'
import {useEffect} from 'react'

const Test = () => {

useEffect( () => {
  getProducts()
})

  return (
    <div className="p-8">
        


    </div>
  );
};

export default Test;