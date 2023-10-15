import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import { ButtonComponents } from "../basicComponents/BasicComponents";

import { cleanToCartAction, cleanTotalAction } from "../../redux/actions/actions"
import { selectPrice } from "../../redux/selectors";

import s from './footer.module.scss'

const Footer = () => {
  const totalPrice = useSelector(selectPrice);
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(cleanToCartAction())
    dispatch(cleanTotalAction(0))
  }
  
  return (
      <footer>
        <hr />
        <div className={s.cartTotal}>
          <h4>
            total <span>${totalPrice.toFixed(2)}</span>
          </h4>
        </div>
        <ButtonComponents name="clear cart" className={`${s.button} ${s.clearBtn}`} onClick={clearCart}/>
      </footer>
  );
};

export default Footer;