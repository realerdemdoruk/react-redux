import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../redux/actions';
export const Themes = () => {
  const tema = useSelector((state) => state.temaReducer);
  const dispatch = useDispatch();
  return (
    <div style={tema}>
        <button style={tema.button} onClick={() => dispatch(Actions.temaAksiyon.acik_tema())}>
        Açık Tema
      </button>
      <button style={tema.button} onClick={() => dispatch(Actions.temaAksiyon.varsayilan_tema())}>
        Varsayılan Tema
      </button>
      <button style={tema.button} onClick={() => dispatch(Actions.temaAksiyon.koyu_tema())}>
        Koyu Tema
      </button>
   
    </div>
  );
};

export default Themes;
