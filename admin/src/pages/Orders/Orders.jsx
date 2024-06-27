

import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { publicRequest } from '../../utils/requestMethod';

const Orders = () => {

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await publicRequest.get('/orders');
                setOrders(res.data);
            } catch (error) {
                console.log(error.response.data);
                // console.log(error.response.data.keyPattern);
                // }
            }
        };
        getOrders();
    }, []);

    return (
        <>
            <Header />
            <div className="main-container">
                {orders.length !== 0 ?
                    <>
                        <h3>ORDER DETAILS</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.NO.</th>
                                    <th>OrderID.</th>
                                    <th>UserID</th>
                                    <th>UserName</th>
                                    <th>UserEmail</th>
                                    <th>ProductID</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Date / Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => {
                                    return (
                                        <tr key={order._id} style={{ textAlign: "center" }} >
                                            <td >{index + 1}</td>
                                            <td >{order._id}</td>
                                            <td>{order.userId}</td>
                                            <td>{order.userName}</td>
                                            <td>{order.email}</td>
                                            {
                                                order.products.map((product) =>
                                                    <>
                                                        <td key={product._id}>{product._id}</td>
                                                        <td key={product.quantity}>{product.quantity}</td>
                                                    </>
                                                )
                                            }
                                            <td >{order.amount}</td>
                                            <td>{order.status}</td>
                                            <td>{new Date(order.createdAt).toDateString() + ' , ' + new Date(order.createdAt).toLocaleTimeString()}</td>
                                        </tr>

                                    );
                                })}
                            </tbody>
                        </table>
                    </>
                    : <div className="loader"></div>}
            </div>
        </>
    );
};

export default Orders;