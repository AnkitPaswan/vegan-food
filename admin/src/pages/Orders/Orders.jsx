

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
            <div className="main-container" style={{ overflowX: 'auto' }}>
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
                                {orders.map((order) => {
                                    const createdAt = new Date(order.createdAt);
                                    const today = new Date();
                                    const isToday = createdAt.getDate() === today.getDate() &&
                                        createdAt.getMonth() === today.getMonth() &&
                                        createdAt.getFullYear() === today.getFullYear();
                                    return (
                                        <tr key={order._id} style={{ textAlign: "-webkit-center" }} >
                                            <td >{orders.indexOf(order) + 1}</td>
                                            <td >{order._id}</td>
                                            <td>{order.userId}</td>
                                            <td>{order.userName}</td>
                                            <td>{order.email}</td>
                                            {
                                                order.products.length > 1 ? (
                                                    <>
                                                        <td style={{ padding: "0 2px" }}>{
                                                            order.products.map((product) =>
                                                                <tr style={{ margin: "auto" }} key={product._id} >
                                                                    {order.products.indexOf(product) + 1 + '. '}
                                                                    {product._id}
                                                                </tr>
                                                            )}
                                                        </td>
                                                        <td >{
                                                            order.products.map((product) =>
                                                                <tr key={product.quantity}>{product.quantity}</tr>
                                                            )
                                                        }</td>
                                                    </>
                                                ) :
                                                    <>
                                                        <td key={order.products[0]._id}>{order.products[0]._id}</td>
                                                        <td key={order.products[0].quantity}>{order.products[0].quantity}</td>
                                                    </>
                                            }
                                            <td >{order.amount}</td>
                                            <td>{order.status}</td>
                                            <td>{isToday ? 'Today' : createdAt.toDateString()} , {createdAt.toLocaleTimeString()}</td>
                                            {/* <td>{new Date(order.createdAt).toDateString() + ' , ' + new Date(order.createdAt).toLocaleTimeString()}</td> */}
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