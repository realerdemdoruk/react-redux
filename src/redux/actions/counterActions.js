import ActionTypes from '../actionTypes';

const sayiArttir = (val) => {
  return {
    type: ActionTypes.count.SAYI_ARTTIR,
    payload: val,
  };
};

const sayiAzalt = (val) => {
  return {
    type: ActionTypes.count.SAYI_AZALT,
    payload: val,
  };
};

const sayiAksiyon = {
  sayiArttir,
  sayiAzalt,
};

export default sayiAksiyon;
