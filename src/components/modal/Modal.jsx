import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { ProductCart } from '../basicComponents/BasicComponents';

import { useSelector, useDispatch } from 'react-redux';
import { selectCart } from '../../redux/selectors'
import { removeProductCartAction, changeTotalDeleteAction } from '../../redux/actions/actions';

import s from './modal.module.scss'
function ModalCompomemt({show, handleClose, handleSave, handleRemoveAll}) {
  const products = useSelector(selectCart)
  const dispatch = useDispatch()

  const removeProductCart = (id, price) => {
    dispatch(removeProductCartAction(id))
    dispatch(changeTotalDeleteAction(price))
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your cart</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>{products.length ? 
        products.map(cart => (
          <ProductCart 
            key={cart.id}
            title={cart.title}
            description={cart.description}
            image={cart.image}
            price={cart.price.toFixed(2)}
            total={cart.total}
            onClick={() => {removeProductCart(cart.id, cart.price)}}
          />
        )) : <div>Your cart is empty</div>
        }</Modal.Body>
        
        <Modal.Footer className={s.footer}>
          <Button variant="danger" onClick={handleRemoveAll}>
            Remove ALL
          </Button>
          <div className={s.groupButtons}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCompomemt;