import { actionTypes } from './actions';
import loadingData from './loadingData';

const initialState = {
  data: loadingData,
  page: 1,
};

const article = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOAD:
      return {
        ...state,
        data: loadingData,
      };
    case actionTypes.UPDATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default article;
