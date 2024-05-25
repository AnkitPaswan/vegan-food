import React from 'react'
import './NewArrival.css'
import firstImg from "../../assests/midbanner.png"
import secImg from "../../assests/midbanner-2.png"
import thirdImg from "../../assests/midbanner-3.png"
import forthdImg from "../../assests/midbanner-4.png"
import { motion } from 'framer-motion';

const NewArrival = ({ heading }) => {
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
                    <div className="NewArrival-card">
                        <div className="NewArrival-thumbnail">
                            <img src={firstImg} alt="" />
                        </div>
                        <div className="NewArrival-details">
                            <span className="NewArrival-title">Mango Juice</span>
                            <span className="price">$ 20</span>
                        </div>
                    </div>
                    <div className="NewArrival-card" >
                        <div className="NewArrival-thumbnail">
                            <img src={secImg} alt="" />
                        </div>
                        <div className="NewArrival-details">
                            <span className="NewArrival-title">Wayfarer bag-1</span>
                            <span className="price">$ 43.2</span>
                        </div>
                    </div>
                    <div className="NewArrival-card">
                        <div className="NewArrival-thumbnail">
                            <img src={thirdImg} alt="" />
                        </div>
                        <div className="NewArrival-details">
                            <span className="NewArrival-title">Wayfarer bag-2</span>
                            <span className="price">$ 24</span>
                        </div>
                    </div>
                    <div className="NewArrival-card">
                        <div className="NewArrival-thumbnail">
                            <img src={forthdImg} alt="" />
                        </div>
                        <div className="NewArrival-details">
                            <span className="NewArrival-title">Wayfarer bag-3</span>
                            <span className="price">$ 30.3</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default NewArrival