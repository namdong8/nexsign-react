/* screens/Counter.tsx */

import React, { useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { addCount, selectProvider } from '../../store/modules/providerSlice';

function Header() {

  // Hooks
  // 초기 상태값 등록
  const {name, count, value} = useAppSelector(selectProvider);
  const dispatch = useAppDispatch();

  // Functions
  // Action을 발생시켜 상태값 변경
  const onMinus = useCallback(() => {
    dispatch(addCount(value - 1));
  }, [dispatch, value]);

  const onAdd = useCallback(() => {
    dispatch(addCount(value + 1));
  }, [dispatch, value]);


  // View 
  return (
    <>
      <header>
        <h1>테스트: {value}</h1>
        <div>
          <button onClick={onAdd}>+</button>
          <button onClick={onMinus}>-</button>
        </div>
      </header>
    </>
  );
};

export default Header