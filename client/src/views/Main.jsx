import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    
    return (
        <>
           <ProductForm products={products} setProducts={setProducts} />
            <hr/>
           <ProductsList products={products} setProducts={setProducts} />
        </>
    )
}
export default Main;