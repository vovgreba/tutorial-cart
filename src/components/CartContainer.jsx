import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'

import {requestData} from '../api/Api'

import{ ReactComponent as Preloader } from './preloder/loading.svg'
import CartItem from "./cartItem/CartItem";
import Footer from './footer/Footer'

import {changeTotalAction, addedToCartAction} from '../redux/actions/actions'

const CartContainer = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0.00)
  const dispatch = useDispatch();

  useEffect(() => {
    const getFetch = async () => {
      setLoading(true);
      try{
        const data = await requestData()
        setData(data)
        setLoading(false)
      }catch(error) {
        setLoading(false)
        setError(error)
      }
    };
    getFetch();
  }, [])

  const totalCountProduct = (total)=> {
    setTotalCount(prevTotalCount => prevTotalCount + total)
  }

  const addToCart = (price, totalProduct, product) => {
    const totalPrice = totalProduct !== 0 ? price * totalProduct : 0;
    dispatch(changeTotalAction(totalPrice))
    dispatch(addedToCartAction(product, totalProduct, totalPrice))
    totalCountProduct(totalPrice)
  }

  if(loading) {
    return(
      <div className='preloader'>
        <Preloader />
      </div>
    )
  } 

  if(error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="cart">
      <h2>your bag</h2>
      <article>
        {data.map(item => (
          <CartItem 
            key={item.id} product={item}
            totalCountProduct={totalCountProduct}
            addToCart={addToCart}
          />
        ))}
      </article>
      <Footer totalCount={totalCount}/>
    </section>
  );
};

export default CartContainer;
