import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const CatBtn = () => {
    const navigate=useNavigate()
    const onClick =()=>{
        setTimeout(()=>{
            
            navigate("/Page2")
        },2700)
    }
  return (
    <>
      <NavLink className="btn btn-outline-light ms-2">
        <span className='fa fa-shopping-cart ms-1'></span>Cart(0)
      </NavLink>
    </>
  )
}

export default CatBtn