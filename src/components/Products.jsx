import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext';
import Footer from './Footer';
import Header from './Header';
import './Products.css'
import SingleProduct from './SingleProduct';

const Products = () => {
    const navigate = useNavigate();
    const products = useContext(ProductContext);
    const cart = useSelector(state => state.cart);

    return (
        <>
            <Header />
            <div className='products-container'>
                {
                    products.map(product => {
                        return (
                            <SingleProduct product={product} key={product.id} />
                        )
                    })
                }
                {
                    cart.length > 0 ? <button className='addToCart' onClick={() => navigate('/cart')}> Buy Now </button> : null
                }
            </div>
            <Footer />
        </>
    )
}

export default Products