import React from "react";
import Button from 'react-bootstrap/Button';

import s from './basicComponents.module.scss'

export function ButtonComponents(props) {
  return(
    <button  onClick={props.onClick} type='button' className={props.className}>{props.name}</button>
  )
}

export function ProductCart(props) {
  return(
    <div className={s.cartItem}>
      <img className={s.image}src={props.image} alt={props.title} />
      <div>
        <h2 className={s.title}>{props.title}</h2>
        <p>{props.description}</p>
        <span className={s.price}>{props.price}$</span>
        <span>Amount - {props.total}</span>
        <Button onClick={props.onClick} type='button'>Remove</Button>
      </div>
    </div>
  )
}

