export const selectCart = (state) => state.changeCartItemsReducer.cartItems;
export const selectPrice = (state) => state.changePriceReducer.totalPrice;
export const selectRemoveElement = (state) => state.changeCartItemsReducer.removeElement;