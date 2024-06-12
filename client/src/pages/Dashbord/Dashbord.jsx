import React from 'react'
import { useState } from 'react';
import { addProduct } from '../../redux/apiCalls';
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from '../../utils/requestMethod';
import { useNavigate } from "react-router-dom";
import './Dashbord.css'

const Dashbord = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    console.log(error);

    const addProducts = async () => {
        try {
            const res = await publicRequest.post('/products', { title, desc, img, categories, qty, price });
            console.log(res);
            if (res.data) {
                addProduct(dispatch, { title, desc, img, categories, qty, price });
                // navigate('/login');
            }
        } catch (error) {
            console.log(error.response.data);
            // console.log(error.response.data.keyPattern);
            // }
        }
    }
    const handleClick = (e) => {
        e.preventDefault();
        addProducts(title, desc, img, categories, qty, price);
    }

    return (
        <div className="admin">
            <div className="admin-container">
                <h1 >Admin Panel</h1>
                <form action="">
                    <input type="title" placeholder="Product Title" onChange={(e) => setTitle(e.target.value)} />
                    <input type="desc" placeholder="Product Description" onChange={(e) => setDesc(e.target.value)} />
                    <input type="img" placeholder=" Product Img" onChange={(e) => setImg(e.target.value)} />
                    <input type="categories" placeholder="Product Categories" onChange={(e) => setCategories(e.target.value)} />
                    <input type="qty" placeholder="Product Qty" onChange={(e) => setQty(e.target.value)} />
                    <input type="price" placeholder="Product Price" onChange={(e) => setPrice(e.target.value)} />
                    <button onClick={handleClick} disabled={isFetching}>Add Product</button>
                    <div className='home' onClick={() => navigate('/')}>Back to home</div>
                </form>
            </div>
        </div>
    )
}

export default Dashbord