import React, { useEffect, useState } from 'react'
import { publicRequest } from '../../utils/requestMethod';
import './ProductLists.css'
import Header from '../../components/Header/Header';

const ProductLists = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get('/products');
                setProducts(res.data);
                console.log(products);
            } catch (error) {
                console.log(error.response.data);
                // console.log(error.response.data.keyPattern);
                // }
            }
        }
        getProducts();
    }, [])

    return (
        <>

            <Header />

            <div className="main-container">
                <h1>PRODUCTS</h1>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>
                                        <img src={product.img} alt='' height={50} />
                                    </td>
                                    <td><strong>{product.title}</strong></td>
                                    <td>{product.desc}</td>
                                    <td>{product.categories}</td>
                                    <td>{product.qty}</td>
                                    <td>{product.price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductLists