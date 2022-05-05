import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionsTypes";

const initialState = {
  cart: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};
