import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { addCount, getProviderList, selectProvider } from '../../store/modules/providerSlice';

function ProviderList(props) {

  // ✅ 지역변수

  const list = props.list

  // ✅ Redux
  const {value} = useAppSelector(selectProvider);
  const dispatch = useAppDispatch();

  // ✅ Functions
  const onMinus = () => {
    dispatch(addCount(value - 1));
  };

  const onAdd = () => {
    dispatch(addCount(value + 1));
  };

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