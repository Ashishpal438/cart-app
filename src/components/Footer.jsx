import React from 'react'
import { MdOutlineHome } from "react-icons/md"
import { FiSearch } from "react-icons/fi"
import { BsCart4, BsThreeDots } from "react-icons/bs"
import "./Footer.css"
import { useSelector } from 'react-redux'

const Footer = () => {

    const cart = useSelector(state => state.cart)

    return (
        <div className='footer-container'>
            <MdOutlineHome className='icon' />
            <FiSearch className='icon disabled' />
            <div className='cart'>
                <BsCart4 className='icon disabled'/>
                <span className='cart-count'>{cart.length}</span>
            </div>
            <BsThreeDots className='icon disabled'/>
        </div>
    )
}

export default Footer