import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../redux/actions';

const Counter = () => {
  const count = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(Actions.sayiAksiyon.sayiArttir(5))}>
        Arttır(+)
      </button>
      <button onClick={() => dispatch(Actions.sayiAksiyon.sayiAzalt(5))}>
        Azalt(-)
      </button>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
