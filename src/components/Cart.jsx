import React, { useMemo, useState } from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./Cart.css"
import PaymentCard from './PaymentCard'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const Cart = () => {
    const navigate = useNavigate()
    const products = useSelector(state => state.cart)

    let [order, setOrder] = useState(0)
    let [delivery, setDelivery] = useState(0)

    useMemo(() => {
        if (products) {
            let sum = 0
            for (let i = 0; i < products.length; i++) {
                sum += Number(Math.floor(products[i].price.split(" ")[1] / 30))
            }

            console.log(sum, typeof sum)

            setOrder(sum)
            setDelivery(7.2)
        }
    }
        , [products])


    const paymentCards = [
        {
            company: "VISA",
            lastDigits: 3822,
            cardHolder: "Evan Marry",
            expireDate: "12/23",
            color: "#8687C0"
        },
        {
            company: "MASTERCARD",
            lastDigits: 2562,
            cardHolder: "Chris Hamesworth",
            expireDate: "11/24",
            color: "#f86868"
        },
        {
            company: "RUPAY",
            lastDigits: 4455,
            cardHolder: "Elon Musk",
            expireDate: "08/24",
            color: "#71A1DE"
        }
    ]


    return (
        <div className='cart-container'>
            <FaLongArrowAltLeft onClick={() => navigate('/')} />
            <h1>Check out</h1>
            <div className='cart-item-container'>
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className="cart-item">
                                <div>
                                    <b> {product.name} </b>
                                    <br />
                                    <span className='light'> {product.description}</span>
                                    <br />
                                    <span> <b>${Math.floor(product.price.split(" ")[1] / 30)}</b></span> <span className='color-text'>In Stock</span>
                                </div>


                                <img src={product.image} alt={product.name} />

                            </div>
                        )
                    })
                }
            </div>

            <div className='card-header'>
                <h2>Payment</h2>
                <h4> <span className='large'>+</span> Add new Card</h4>
            </div>

            <Carousel autoplay dots={false}>
                <div>
                    <PaymentCard card={paymentCards[0]} />
                </div>
                <div>
                    <PaymentCard card={paymentCards[1]} />
                </div>
                <div>
                    <PaymentCard card={paymentCards[2]} />
                </div>
            </Carousel>

            <div>
                <div className='flex'>
                    <span>Order</span>
                    <span>{order}$</span>
                </div>
                <div className='flex'>
                    <span> Delivery </span>
                    <span> {delivery}$ </span>
                </div>
                <div className='flex'>
                    <span><b>Summary</b></span>
                    <span>{order + delivery}$</span>
                </div>
            </div>
            <button className='pay-btn'>Pay Now</button>
        </div>
    )
}

export default Cart