import React, { useEffect, useState } from 'react'
import './NewArrival.css'
import { motion } from 'framer-motion';
import { publicRequest } from "../../utils/requestMethod"

const NewArrival = ({ heading }) => {

    const [arrivals, setArrivals] = useState([]);

    useEffect(() => {
        const getArrivals = async () => {

            try {
                const res = await publicRequest.get("/newArrivals");
                setArrivals(res.data);
                // console.log(arrivals);
            } catch (error) {
                console.log("Error in getting products", error)
            }

        };
        getArrivals()
    }, [])
    console.log(arrivals);


    return (
        <>
            <div className="NewArrival-container"
            >
                <motion.div className='head-Title'
                    initial={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.7 }}
                >{heading}</motion.div>
                <motion.div className="NewArrival"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false }}
                >
                    {
                        arrivals.length !== 0 ?
                            arrivals.map((item) =>
                            (
                                <div className="NewArrival-card" key={item._id}>
                                    <p className="new">
                                        NEW
                                    </p>
                                    <div className="NewArrival-thumbnail">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="NewArrival-details">
                                        <span className="NewArrival-title">{item.title}</span>
                                        <span className="price">&#8377; {item.price}</span>
                                        {/* <span className="price">{
                                            item.inStock === true ? "IN STOCK" : "OUT OF STOCK"
                                        }
                                            <del>&#8377; {item.price + 500}</del>
                                        </span> */}
                                    </div>
                                </div>
                            )
                            ) : <h1>Loading...</h1>
                    }

                </motion.div>
            </div>
        </>
    )
}

export default NewArrival