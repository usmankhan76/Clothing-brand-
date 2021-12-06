import React from 'react'
import { connect } from 'react-redux';
import { cartItemsSelector } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButtom from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss';
import {createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems,history,dispatch }) => {
    return (
        <div className='cart-dropdown'>
          <div className="cart-items">
          {cartItems.length ?(cartItems.map((item)=><CartItem key={item.id} item={item}/>)):(<span className="empty-message">Youre Cart is Empty</span>)}
          </div>
          
          
          <CustomButtom onClick={()=>{
              history.push('/checkout');
              dispatch(toggleCartHidden())
        }} >GO TO CHECKOUT</CustomButtom>
         
             
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    cartItems:cartItemsSelector
})


export default withRouter( connect(mapStateToProps)(CartDropdown)) //if we don't pass the mapDispatchToProps to the connect so the connect by default pass the dispatch to connected conponents porps