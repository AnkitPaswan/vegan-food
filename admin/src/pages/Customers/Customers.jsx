import React, { useEffect, useState } from 'react'
import './Customers.css'
import Header from '../../components/Header/Header'
import { publicRequest } from '../../utils/requestMethod';

const Customers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await publicRequest.get('/users');
                setUsers(res.data);
            } catch (error) {
                console.log(error.response.data);
                // console.log(error.response.data.keyPattern);
                // }
            }
        }
        getUsers();
    }, [])

    return (
        <>
            <Header />
            <div className="main-container">
                {users.length !== 0 ?
                    <>
                        <h3>USER DETAILS</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.NO.</th>
                                    <th>User Id</th>
                                    <th>User name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>isAdmin</th>
                                    <th>CreatedAt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => {
                                    return (

                                        <tr key={user._id}>
                                            <td>{index + 1}</td>
                                            <td>{user._id}</td>
                                            <td><strong>{user.username}</strong></td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>{user.isAdmin === true ? 'true' : 'false'}</td>
                                            <td>{new Date(user.createdAt).toLocaleString()}</td>
                                        </tr>

                                    );
                                })}
                            </tbody>
                        </table>
                    </>
                    : <div className="loader"></div>}
            </div>
        </>
    )
}

export default Customers