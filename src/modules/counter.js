//Ducks 패턴을 사용하여 작성

// 액션 타입 정의
const INCREASE = 'counter/INCREASE'; // "모듈 이름/액션 이름" 형식으로 작성
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태
const initialState = {
  number: 0,
};

// 리듀서 함수 만들기
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { number: state.number + 1 };
    case DECREASE:
      return { number: state.number - 1 };
    default:
      return state;
  }
}
