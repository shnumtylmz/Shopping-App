export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const isProductInCart = state.find(
        (product) => product.id === action.payload.id
      );

      if (isProductInCart) {
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "REMOVE_FROM_CART":
      return state.filter((product) => product.id !== action.payload.id);

    default:
      return state;
  }
};

export const initialState = [];
