import React from 'react'
import "./PaymentCard.css"

const PaymentCard = ({ card }) => {
    return (
        <>
            <div className='payment-container' style={{ backgroundColor: `${card.color}`, border: `1px solid ${card.color}` }}>
                <h2>{card.company}</h2>
                <div className='card-number'>
                    <span className='dots'>....</span>
                    <span className='dots'>....</span>
                    <span className='dots'>....</span>
                    <span><b>{card.lastDigits}</b></span>
                </div>
                <div className='card-holder'>
                    <div>
                        <span>Card Holder</span>
                        <br />
                        <span><b>{card.cardHolder}</b></span>
                    </div>
                    <div>
                        <span>Expires</span>
                        <br />
                        <span><b>{card.expireDate}</b></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentCard