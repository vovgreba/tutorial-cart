export const changeTotalAction = (payload) => {
  return {
    type: 'CHANGE_TOTAL_PRICE',
    payload: payload,
  }
}

export const changeTotalDeleteAction = (payload) => {
  return {
    type: 'CHANGE_TOTAL_DELETE',
    payload: payload,
  }
}
export const cleanTotalAction = (payload) => {
  return {
    type: 'CLEAN_TOTAL_PRICE',
    payload: payload,
  }
}

export const addedToCartAction = (product, total, price) => {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {...product, total, price},
  }
}

export const cleanToCartAction = () => {
  return {
    type: 'CLEAN_TO_CART',
  }
}

export const removeProductCartAction = (id) => {
  return {
    type: 'REMOVE_PRODUCT_CART',
    payload: id
  }
}

export const saveProductCartAction = () => {
  return {
    type: 'SAVE_PRODUCT_CART',
  }
}
export const saveProductPriceAction = (el,total) => {
  return {
    type: 'SAVE_PRODUCT_PRICE',
    payload: {el, total}
  }
}