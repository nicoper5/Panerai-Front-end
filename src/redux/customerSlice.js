import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: { bag: [] },
  reducers: {
    storeCredentials(state, action) {
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    addToBag(state, action) {
      if (!state.bag.find((product) => product.id === action.payload.id)) {
        state.bag.push({ ...action.payload, qty: 1 });
      } else {
        const updatedBag = state.bag.map((product) =>
          product.id === action.payload.id ? { ...product, qty: product.qty + 1 } : product,
        );
        state.bag = updatedBag;
      }
    },
    reduceQty(state, action) {
      const wantedIndex = state.bag.findIndex((product) => product.id === action.payload.id);
      if (state.bag[wantedIndex].qty > 1) state.bag[wantedIndex].qty--;
    },
    removeFromBag(state, action) {
      const updatedBag = state.bag.filter((product) => product.id !== action.payload);
      state.bag = updatedBag;
    },
    clearBag(state, action) {
      state.bag = [];
    },
    clearCredentials(state, action) {
      delete state.token;
      delete state.email;
    },
  },
});

const { actions, reducer } = customerSlice;
export const { storeCredentials, addToBag, removeFromBag, clearBag, reduceQty, clearCredentials } =
  actions;
export default reducer;
