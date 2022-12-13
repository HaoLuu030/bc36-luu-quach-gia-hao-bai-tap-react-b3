import data from "../../data//data.json";

const DEFAULT_STATE = {
  shoeDetails: data[0],
  cart: [],
};

export const shoeReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "VIEW_DETAILS":
      state.shoeDetails = payload;
      break;
    case "ADD_TO_CART": {
      const newCart = [...state.cart];
      const idx = newCart.findIndex((element) => {
        return element.id === payload.id;
      });
      if (idx === -1) {
        newCart.push({ ...payload, cartQuantity: 1 });
      } else {
        newCart[idx].cartQuantity++;
      }
      state.cart = newCart;
      alert("The product was succesfully added");
      break;
    }

    case "HANDLE_QUANTITY": {
      const { shoe, isIncreased } = payload;
      const newCart = [...state.cart];
      const idx = newCart.findIndex((element) => {
        return element.id === shoe.id;
      });
      if (isIncreased) {
        newCart[idx].cartQuantity++;
      } else {
        if (newCart[idx].cartQuantity === 1) {
          newCart.splice(idx, 1);
        } else {
          newCart[idx].cartQuantity--;
        }
      }
      state.cart = newCart;

      break;
    }
    case "HANDLE_DELETE": {
      const newCart = [...state.cart];
      const idx = newCart.findIndex((element) => {
        return element.id === payload.id;
      });
      if (window.confirm("Do you really want to delete this product?")) {
        newCart.splice(idx, 1);
      }
      state.cart = newCart;

      break;
    }

    default:
      break;
  }
  return { ...state };
};
