import React from 'react'
import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
const Cart = (props) => {
    const cartItems =<ul className={classes['cart-items']}>{[{id:'c1',name:'Sushi',amount:2,price: 12.99}].map(item=>(<li key={item.id}>
        {item.name}
    </li>))}</ul>
    return (
        <Modal closeModal={props.closeModal}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$250</span>
            </div>
            <div className={classes.actions}>
                <button className='' onClick={props.closeModal}>Close</button>
                <button className=''>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
