import React, { useEffect, useState } from 'react';
import { publicRequest } from '../../utils/requestMethod';
import Products from '../../components/Products/Products';

const RelatedProducts = ({ categoryId }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(`/products?category=${categoryId}`);
                setProducts(res.data);
            } catch (error) {
                console.log("Error in getting products", error)
            }
        };
        getProducts()
    }, [categoryId]);

    console.log();
    return (
        <div className="related-product">
            <Products headingText="Related Product" prod={products} />
        </div>
    );
};

export default RelatedProducts;