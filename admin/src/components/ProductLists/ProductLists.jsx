import React, { useEffect, useState } from 'react'
import { publicRequest } from '../../utils/requestMethod';
import './ProductLists.css'

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


        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return (
                        <tr key={product._id}>
                            <td>
                                <img src={product.img} alt='' height={50} />
                            </td>
                            <td><strong>{product.title}</strong></td>
                            <td>{product.desc}</td>
                            <td>{product.price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>

    )
}

export default ProductLists