import React, {useState} from "react";

import { ButtonComponents } from "../basicComponents/BasicComponents";
import TooltipComponent from "../tooltip/Tooltip";

import s from './сartItem.module.scss'

const CartItem = (props) => {
  const { image, title, price, id} = props.product
  const [totalProduct, setTotalProduct] = useState(parseInt(localStorage.getItem(`${id}`) || 0))
  // localStorage.clear()
  const incrementQuantity = () => {
    const newTotalProduct = totalProduct + 1;
    setTotalProduct(newTotalProduct);
    localStorage.setItem(`${id}`, `${newTotalProduct}`);
  }

  const decrementQuantity = () => {
    if(!totalProduct) {
      setTotalProduct(0)
    } else {
      const newTotalProduct = totalProduct - 1;
      setTotalProduct(newTotalProduct);
      localStorage.setItem(`${id}`, `${newTotalProduct}`);
    }
  }

  return (
    <div className={s.cartItem}>
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className={s.itemPrice}>${price}</h4>
        <TooltipComponent addToCart={props.addToCart} price={price} totalProduct={totalProduct}
        product={props.product} setTotalProduct={setTotalProduct}/>
      </div>
      <div>
        
        <ButtonComponents 
          onClick={()=> incrementQuantity(price)}
          className={s.amountBtn}
          name={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
            </svg>
          }
        />
        <p className={s.amount}>{totalProduct}</p>

        <ButtonComponents 
          onClick={()=> decrementQuantity(price)}
          className={s.amountBtn}
          name={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default CartItem;
