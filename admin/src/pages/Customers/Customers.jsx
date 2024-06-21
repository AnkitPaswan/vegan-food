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
                console.log(users);
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
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>User name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>isAdmin</th>
                        <th>CreatedAt</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        console.log(user.isAdmin);
                        return (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td><strong>{user.username}</strong></td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.isAdmin === true ? 'true' : 'false'}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Customers