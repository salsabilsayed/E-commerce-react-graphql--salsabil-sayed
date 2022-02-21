import {
  INCREMENT,
  DECREMENT,
  ADD_TO_CART,
  CHANGE_PRODUCT_PRICE,
  GET_TOTAL_PRICE
} from "./types";

const initialState = {
  products: [],
  basketNumber: 0,
  totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
        basketNumber: state.basketNumber + 1,
      };

    case INCREMENT:
      let incProduct = state.products.map((item) => {
        if (item.product.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      return {
        ...state,
        products: incProduct,
      };

    case DECREMENT:
      let decProduct = state.products.map((item) => {
        if (item.product.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });

      return {
        ...state,
        products: decProduct,
      };

    case CHANGE_PRODUCT_PRICE:
      const newProducts = state.products.map((item) => {
        if (item.product.id === action.payload) {
          return {
            ...item,
            product: {
              ...item.product,
              price: item.product.originalPrice * item.amount,
            },
          };
        }
        return item;
      });
      return {
        ...state,
        products: newProducts,
      };

    case GET_TOTAL_PRICE:
      let total = 0;
      state.products.forEach(item => total += item.product.price)
      return{
        ...state,
        totalPrice: total
      }

    default:
      return state;
  }
};

export default cartReducer;
