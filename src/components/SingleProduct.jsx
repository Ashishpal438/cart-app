import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import "./SingleProduct.css"

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  }

  return (
    <div className='product-card' onClick={() => handleAddToCart(product)}>
      <div className='product-image'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='product-info'>
        <span className='highlighted-text'>{product.name}</span>
        <div className='highlighted-text'>
          ${Math.floor(product.price.split(" ")[1] / 30)}
        </div>
      </div>
      <span className='special'>{product.description}</span>
    </div>
  )
}

export default SingleProduct