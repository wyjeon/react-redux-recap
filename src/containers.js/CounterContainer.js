// Container Component
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterComtainer = () => {
  const number = useSelector(state => state.counter.number); // useSelector로 상태 조회
  const dispatch = useDispatch(); // useDispatch로 액션 디스패치
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]); // usecallback 컴포넌트 성능 최적화
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterComtainer;
