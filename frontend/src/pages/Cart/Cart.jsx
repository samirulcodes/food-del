import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import {useNavigate} from 'react-router-dom'

const Cart = () => {

  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext)

  const navigate=useNavigate()

  return (
    // cart items , qunatity, price, remove--- section
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />       {/* items image*/}
                  <p>{item.name}</p>                    {/* items name*/}
                  <p>₹{item.price}</p>                   {/* items price*/}
                  <p>{cartItems[item._id]}</p>          {/* items quantity*/}
                  <p>₹{item.price * cartItems[item._id]}</p>  {/* itemstotal price*/}
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </>
            )
          }
        })}
      </div>

      {/* DELIVERY FEE , TOTAL SECTION - LEFT */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0 ? 0 : 20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0 ? 0 : getTotalCartAmount() + 20}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        {/* PROMO CODE SECTION -RIGHT*/}
        <div className="cart-promocode">
          <div>
            <p> If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
