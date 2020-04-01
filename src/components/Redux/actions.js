import { NUMBERS } from "./types";

const num = numbers => {
  return {
    type: NUMBERS,
    payload: numbers
  };
};

export default num;