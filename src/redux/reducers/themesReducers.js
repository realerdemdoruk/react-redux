import ActionTypes from '../actionTypes';
import { KOYU_TEMA } from '../actionTypes/themesTypes';

const initialState = {
  backgroundColor: 'red',
  height: '300px',
  width: '900px',
};
const lightTheme = {
  backgroundColor: 'white',
  height: '300px',
  width: '900px',
};
const darkTheme = {
  backgroundColor: 'black',
  height: '300px',
  width: '900px',
};

const temaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.tema.ACIK_TEMA:
      return lightTheme;

    case ActionTypes.tema.KOYU_TEMA:
      return darkTheme;

    default:
      return state;
  }
};

export default temaReducer;
