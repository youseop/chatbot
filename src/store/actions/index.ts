import { CHANGE_CNT, INCREMENT } from "./types";

export const increaseCnt = () => {
  return {
    type: INCREMENT,
  };
};

export const changeCnt = (num: number) => {
  return {
    type: CHANGE_CNT,
    payload: num,
  };
};
