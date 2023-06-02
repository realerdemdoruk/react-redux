import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../redux/actions';


const Counter = () => {
  const count = useSelector((state) => state.countReducer);
  const tema = useSelector((state) => state.temaReducer);
  const dispatch = useDispatch();
  return (
    <div style={tema}>
    <button style={tema.button} onClick={() => dispatch(Actions.sayiAksiyon.sayiAzalt(5))}>
        Azalt(-)
      </button>
      <p>{count}</p>
      <button style={tema.button} onClick={() => dispatch(Actions.sayiAksiyon.sayiArttir(5))}>
        Arttır(+)
      </button>
    </div>
  );
};

export default Counter;
