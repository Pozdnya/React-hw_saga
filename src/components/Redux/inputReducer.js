import { NUMBERS } from "./types";

const initialState = {
  value: 1,
  numbers: null,
};

const inputReducer = (state = initialState, action) => {

  switch (action.type) {
    case NUMBERS:
      return { ...state, numbers: action.payload };
    default:
      return state;
  }
};

export default inputReducer;