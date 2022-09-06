// Ducks Pattern

/* ----------------- 액션 타입 (Action Name) ------------------ */
const SET_TEST =  'userinfo/SET_TEST'; 

/* ----------------- 액션 생성 함수 ------------------ */
export const test = (test) => ({ type: SET_TEST, test });

/* ----------------- 모듈의 초기 상태 ------------------ */
const initialState = { 
    test: 0,
};

/* ----------------- 리듀서 ------------------ */
export default function userinfo(state = initialState, action) {
  switch (action.type) {
    case SET_TEST:
      return {
        ...state,
        test: action.test,
      };
    default:
      return state;
  }
}