import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { getProviderList, selectProvider } from '../../store/modules/providerSlice';
import ProviderList from '../item/ProviderList';

function Provider() {

  // ✅ Redux
  const {list} = useAppSelector(selectProvider);
  const dispatch = useAppDispatch();

  // ✅ API 통신
  const getList = async () => {
      await dispatch(getProviderList()).unwrap()
  }

  // dispatch(getProviderList()).unwrap()

  // ✅ View 
  return (
    <>
      <div>
        <button onClick={getList}>인증기관 목록 조회</button>
        <ProviderList list={list}/>
      </div>
    </>
  );
};

export default Provider