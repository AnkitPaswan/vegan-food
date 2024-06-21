import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'

const Home = () => {
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}

export default Home



// import React, { useState } from 'react';
// import ProductList from '../components/ProductList';
// import ProductForm from '../components/ProductForm';
// import './Home.css'

// const Home = () => {
//     const [products, setProducts] = useState([]);

//     const addProduct = (product) => {
//         setProducts([...products, product]);
//     };

//     const updateProduct = (updatedProduct) => {
//         setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
//     };

//     const deleteProduct = (id) => {
//         setProducts(products.filter(product => product.id !== id));
//     };

//     return (
//         <div className="app">
//             <h1>Product Admin Panel</h1>
//             <ProductForm addProduct={addProduct} />
//             <ProductList
//                 products={products}
//                 updateProduct={updateProduct}
//                 deleteProduct={deleteProduct}
//             />
//         </div>
//     );
// };

// export default Home;
