import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { getProviderList, selectProvider } from '../../store/modules/providerSlice';
import ProviderList from '../item/ProviderList';

function Provider() {

  // ✅ Hooks
  const {lists} = useAppSelector(selectProvider);
  const dispatch = useAppDispatch();

  // ✅ API 통신
  const getList = async (id) => {
    try {
      await dispatch(getProviderList(id)).unwrap()
    } catch (err) {
    }
  }

  // dispatch(getProviderList()).unwrap()

  // ✅ View 
  return (
    <>
      <div>
        <button onClick={getList}>인증기관 목록 조회</button>
        <ProviderList list={lists.list}/>
      </div>
    </>
  );
};

export default Provider