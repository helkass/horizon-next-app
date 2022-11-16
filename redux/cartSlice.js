import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems:
    typeof window !== "undefined"
      ? localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
      : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      // check if in cart exist the product
      if (itemIndex >= 0) {
        state.cartItems[itemIndex] = {
          ...state.cartItems[itemIndex],
          cartQuantity: state.cartItems[itemIndex].cartQuantity + 1,
        };
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      // myCart.push(JSON.stringify(action.payload));
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    remove(state, action) {
      const nextCart = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      state.cartItems = nextCart;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      // find the index specifiec for action
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        // remove
        const nextCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );

        state.cartItems = nextCartItems;
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { add, remove, decreaseCart, getTotals } = CartSlice.actions;

export default CartSlice.reducer;
