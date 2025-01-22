import { combineReducers } from "@reduxjs/toolkit";
import { isDataReducer } from "./module/isDataReducer";
import { counterReducer } from "./module/counterReducer";
import { bankReducer } from "./module/bankReducer";

// 1.src/ state/index.js 에서 통합처리
// store/index.js , 여러개의  reducer를 통합하는 역할
const rootReducer = combineReducers({
  isData: isDataReducer,
  count: counterReducer,
  bank: bankReducer,
  //   만약 전역 관리 state 가 추가되면 이 곳에도 추가 키 이름은 의미를 담아서 지정할 것
});

// 2-2 내보내기
// src/index.js 에서 쓰일 예정

export default rootReducer;