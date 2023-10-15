import React, {useState} from "react";
import {useSelector, useDispatch } from 'react-redux';

import ModalCompomemt from '../modal/Modal'

import {
    saveProductCartAction,
    saveProductPriceAction,
    cleanToCartAction, 
    cleanTotalAction,
  } from "../../redux/actions/actions";

import { selectPrice, selectRemoveElement } from '../../redux/selectors'

import s from './navbar.module.scss'

const Navbar = () => {
  const [show, setShow] = useState(false);
  const total = useSelector(selectPrice);
  const removeElement = useSelector(selectRemoveElement)
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  }
  const handleRemoveAll = () => {
    dispatch(cleanToCartAction())
    dispatch(cleanTotalAction())
    setShow(false);
  }
  const handleSave = () => {
    dispatch(saveProductCartAction())
    dispatch(saveProductPriceAction(removeElement, total))
    setShow(false);
  }

  const handleShow = () => setShow(true);

  return (
    <nav>
      <div className={s.navCenter}>
        <h3>Tutorial cart</h3>
        <div className={s.navContainer} onClick={handleShow}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className={s.amountContainer}>
            <p className={s.totalAmount}>{total.toFixed(2)}</p>
          </div>
        </div>
        {show &&
          <ModalCompomemt 
            show={show} 
            handleSave={handleSave} 
            handleClose={handleClose} 
            handleShow={handleShow}
            handleRemoveAll={handleRemoveAll}
          />
        }
      </div>
    </nav>
  );
};

export default Navbar;
