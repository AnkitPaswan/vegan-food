import React from 'react'
import Addproduct from '../components/Addproduct/Addproduct'
import ProductLists from '../components/ProductLists/ProductLists'

const Home = () => {
    return (
        <div>
            <ProductLists />
            <Addproduct />
        </div>
    )
}

export default Home