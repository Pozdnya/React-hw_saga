import { NUMBERS } from "./type";

const num = numbers => {
  return {
    type: NUMBERS,
    payload: numbers
  };
};

export default num;