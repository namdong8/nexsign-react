import React, { useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { addCount, getProviderList, selectProvider } from '../../store/modules/providerSlice';

function ProviderList(props) {

  // ✅ 지역변수
  const [names, setNames] = useState([]);
  const [input, setInput] = useState('');
  const [number, setNumber] = useState(0);

  const list = props.list

  // ✅ Hooks
  const {value} = useAppSelector(selectProvider);
  const dispatch = useAppDispatch();

  // ✅ Functions
  const onMinus = useCallback(() => {
    dispatch(addCount(value - 1));
  }, [dispatch, value]);

  const onAdd = useCallback(() => {
    dispatch(addCount(value + 1));
  }, [dispatch, value]);

  // ✅ View 
  return (
    <>
      <div>
        <div>테스트: {value}</div>
        <button onClick={onAdd}>+</button>
        <button onClick={onMinus}>-</button>
        <div>{JSON.stringify(list)}</div>
      </div>
    </>
  );
};

export default ProviderList