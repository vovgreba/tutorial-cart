const initialState = {
  totalPrice: +localStorage.getItem('totalPrice') || 0,
  cartItems:JSON.parse(localStorage.getItem('cartItems')) || [],
}

export const changePriceReducer = (state = initialState, action) => {
  switch(action.type) {

    case 'CHANGE_TOTAL_PRICE': 
      localStorage.setItem('totalPrice', `${state.totalPrice + action.payload}`)

      return {...state, totalPrice: state.totalPrice + action.payload}

    case 'CLEAN_TOTAL_PRICE': 

      localStorage.removeItem('totalPrice')

      return {...state, totalPrice: 0}

    case 'CHANGE_TOTAL_DELETE':
      localStorage.setItem('totalPrice', `${state.totalPrice - action.payload}`)

      return {...state, totalPrice: state.totalPrice - action.payload}

    case 'SAVE_PRODUCT_PRICE':
      const{el,total} = action.payload

      let totalPrice = total
      el?.forEach(element => {
        totalPrice += element.price
      });

      localStorage.setItem('totalPrice', `${totalPrice}`)

      return {...state, totalPrice: totalPrice}

    default: 

      return state
  }
}

export const changeCartItemsReducer = (state = initialState, action) => {

  switch(action.type) {

    case 'ADD_PRODUCT_TO_CART':
      const findProduct = state.cartItems.findIndex(element => element.id === action.payload.id)
      if(findProduct !== -1) {
        const updateCartItems = [...state.cartItems];
        const productToUpdate = updateCartItems[findProduct]
        const serializedArray = JSON.stringify(updateCartItems)
        productToUpdate.total += action.payload.total
        productToUpdate.price += action.payload.price
        localStorage.setItem('cartItems', serializedArray)

        return {...state, cartItems: updateCartItems}
      } else {
        const serializedArrayFromLocalStorage  = localStorage.getItem('cartItems')
        let cartItemsFromLocalStorage = JSON.parse(serializedArrayFromLocalStorage)
        cartItemsFromLocalStorage = [...state.cartItems, action.payload]
        const serializedArray = JSON.stringify(cartItemsFromLocalStorage)
        localStorage.setItem('cartItems', serializedArray)

        return {...state, cartItems: [...state.cartItems, action.payload]}
      }

    case 'REMOVE_PRODUCT_CART':
      const filterCart = state.cartItems.filter(el => el.id !== action.payload)
      const removeElement = state.cartItems.filter(el => el.id === action.payload)
      
      const serializedArray = JSON.stringify(filterCart)
      localStorage.setItem('cartItems', serializedArray)
      
      return { ...state, cartItems: filterCart, removeElement:removeElement,}

    case 'SAVE_PRODUCT_CART':
      
      const saveElementToCart = state.removeElement
      ? [...state.cartItems, ...state.removeElement] 
      : [...state.cartItems]

      const serializedNewArray = JSON.stringify(saveElementToCart)
      localStorage.setItem('cartItems', serializedNewArray)

      return {...state, cartItems: saveElementToCart,}

    case 'CLEAN_TO_CART':
      localStorage.removeItem('cartItems')
      return {...state, cartItems: []}

    default: 
      return state
  }
}
