

import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { publicRequest } from '../../utils/requestMethod';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    // console.log(orders);

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
                                {orders.map((order) => {
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
                                                                <tr style={{ margin: "auto" }} key={product._id}>
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




// return (
//     <>
//         <Header />
//         <div className="main-container">
//             {orders.length !== 0 ? (
//                 <>
//                     <h3>ORDER DETAILS</h3>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>S.NO.</th>
//                                 <th>OrderID.</th>
//                                 <th>UserID</th>
//                                 <th>UserName</th>
//                                 <th>UserEmail</th>
//                                 <th>ProductID</th>
//                                 <th>Quantity</th>
//                                 <th>Amount</th>
//                                 <th>Status</th>
//                                 <th>Date / Time</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orders.map((order) => (
//                                 <tr key={order._id} style={{ textAlign: "center" }}>
//                                     <td>{orders.indexOf(order) + 1}</td>
//                                     <td>{order._id}</td>
//                                     <td>{order.userId}</td>
//                                     <td>{order.userName}</td>
//                                     <td>{order.email}</td>
//                                     {order.products.length > 1 ? (
//                                         <td>
//                                             {order.products.map((product) => (
//                                                 <tr key={product._id}>
//                                                     <td> {product._id}</td>
//                                                 </tr>
//                                             ))}
//                                         </td>
//                                     ) : (
//                                         <td> {order.products[0]._id}
//                                         </td>
//                                     )}
//                                     {order.products.length > 1 ? (
//                                         <td>
//                                             {order.products.map((product) => (
//                                                 <tr key={product.quantity}>
//                                                     <td> {product.quantity}</td>
//                                                 </tr>
//                                             ))}
//                                         </td>
//                                     ) : (
//                                         <td> {order.products[0].quantity}
//                                         </td>
//                                     )}
//                                     <td>{order.amount}</td>
//                                     <td>{order.status}</td>
//                                     <td>
//                                         {new Date(order.createdAt).toDateString()} ,{' '}
//                                         {new Date(order.createdAt).toLocaleTimeString()}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </>
//             ) : (
//                 <div className="loader"></div>
//             )}
//         </div>
//     </>
// );