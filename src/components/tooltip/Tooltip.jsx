import { useState, useRef, useEffect  } from 'react';

import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

import s from './tooltip.module.scss'

const TooltipComponent = (props) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const toogleToolTip =()=> {

    if(!props.totalProduct) {
      setShow(!show)
    }else {
      props.addToCart(props.price, props.totalProduct, props.product)
      props.setTotalProduct(0)
      localStorage.removeItem(`${props.product.id}`)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (show) {
        setShow(false);
      }
    }, 1000);
  
    return () => {
      clearTimeout(timer);
    };
    
  }, [show])

  return (
    <>
      <Button className={s.removeBtn} ref={target} onClick={toogleToolTip}>
        У кошик
      </Button>
      {show && (
        <Overlay target={target.current} show={true} placement="right">
        {(props) => (
          <Tooltip className={s.tooltip} id="overlay-example" {...props}>
            Вкажіть кількість 
          </Tooltip>
        )}
        </Overlay>
      )
      }
    </>
  );
}

export default TooltipComponent;

