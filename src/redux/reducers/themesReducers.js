import ActionTypes from '../actionTypes';
const boxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '300px',
  borderRadius: '10px',
  width: '900px',
  gap: '10px',
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
  },
};

const initialState = {
  ...boxStyle,
  backgroundColor: 'aquamarine',
};

const lightTheme = {
  ...boxStyle,
  backgroundColor: '#f2f2f2',
};

const darkTheme = {
  ...boxStyle,
  backgroundColor: 'black',
  color: 'white',
};

const temaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.tema.ACIK_TEMA:
      return lightTheme;
    case ActionTypes.tema.KOYU_TEMA:
      return darkTheme;
    case ActionTypes.tema.VARSAYILAN_TEMA:
      return initialState;
    default:
      return state;
  }
};

export default temaReducer;
