import React, { useEffect, useState } from 'react'
import { publicRequest } from '../../utils/requestMethod';
import './ProductLists.css'
import Header from '../../components/Header/Header';
import { MdDelete } from 'react-icons/md'
import { FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ProductLists = () => {
    const [products, setProducts] = useState([]);
    const [editing, setEditing] = useState(null);
    const [updatedProduct, setUpdatedProduct] = useState({});
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get('/products');
                setProducts(res.data);
            } catch (error) {
                console.log(error.response.data);
                // console.log(error.response.data.keyPattern);
            }
        }
        getProducts();
    }, []);

    //Delete product
    const handleDelete = async (id) => {
        try {
            await publicRequest.delete(`/products/${id}`);
            setProducts(products.filter((item) => item._id !== id));
            toast.success("Product deleted successfully...", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                theme: "dark",

            });
        } catch (error) {
            console.log(error);
        }
    };

    // Edit product
    const handleEdit = (product) => {
        setEditing(product._id);
        setUpdatedProduct(product);
    };

    // Update product
    const handleUpdate = async () => {
        try {
            await publicRequest.put(`/products/${editing}`, updatedProduct);
            setProducts(products.map((product) => product._id === editing ? updatedProduct : product));
            setEditing(null);
            toast.success("Product updated successfully...", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                theme: "dark",

            });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header />
            <div className="main-container">
                {products.length !== 0 ?
                    <>
                        <h3>PRODUCTS</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Product Id</th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Edit/Dlt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => {
                                    return (
                                        <tr key={product._id}>
                                            <td>{index + 1}</td>
                                            <td>{product._id}</td>
                                            <td>
                                                <img src={product.img} alt='' width={40} />
                                            </td>
                                            {
                                                (editing === product._id) ?
                                                    (
                                                        <>
                                                            <td>
                                                                <input type="text" value={updatedProduct.title} onChange={(e) => setUpdatedProduct({ ...updatedProduct, title: e.target.value })} />
                                                            </td>
                                                            <td>
                                                                <input type="text" value={updatedProduct.desc} onChange={(e) => setUpdatedProduct({ ...updatedProduct, desc: e.target.value })} />
                                                            </td>
                                                            <td>
                                                                <input type="text" value={updatedProduct.categories} onChange={(e) => setUpdatedProduct({ ...updatedProduct, categories: e.target.value })} />
                                                            </td>
                                                            <td>
                                                                <input type="text" value={updatedProduct.qty} onChange={(e) => setUpdatedProduct({ ...updatedProduct, qty: e.target.value })} />
                                                            </td>
                                                            <td>
                                                                <input type="text" value={updatedProduct.price} onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })} />
                                                            </td>
                                                        </>
                                                    )

                                                    : <>
                                                        <td><strong>{product.title}</strong></td>
                                                        <td>{product.desc}</td>
                                                        <td>{product.categories}</td>
                                                        <td>{product.qty}</td>
                                                        <td>{product.price}</td>
                                                    </>
                                            }

                                            <td>
                                                <div className="btn-container">

                                                    {editing === product._id ? (
                                                        <button className='update-btn' onClick={handleUpdate}>UPDATE</button>
                                                        // <GrUpdate size={18} onClick={handleUpdate} />
                                                    ) : (
                                                        <>
                                                            <FaEdit size={18} onClick={() => handleEdit(product)} />
                                                            <MdDelete size={18} onClick={() =>
                                                                handleDelete(product._id)
                                                            } />
                                                        </>
                                                    )}

                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table> </> : <div className="loader"></div>}
            </div>

        </>
    )
}

export default ProductLists