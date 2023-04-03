import ActionTypes from '../actionTypes';

const acik_tema = (val) => {
  return {
    type: ActionTypes.tema.ACIK_TEMA,
    payload: val,
  };
};

const koyu_tema = (val) => {
  return {
    type: ActionTypes.tema.KOYU_TEMA,
    payload: val,
  };
};

const temaAksiyon = {
  acik_tema,
  koyu_tema,
};

export default temaAksiyon;
