import React from 'react'
import { RiArrowUpDownLine } from 'react-icons/ri'
import { BiFilterAlt } from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'
import "./Header.css"

const Header = () => {
    return (

        <div className='header-container'>
            <span className='highlight'>Featured</span>
            <div className='features'>
                <div className='items'>
                    18 Items listed
                </div>
                <div>
                    <span><RiArrowUpDownLine /> Sort <AiOutlineDown /></span>
                    <BiFilterAlt /> Filter
                </div>
            </div>
        </div>
    )
}

export default Header