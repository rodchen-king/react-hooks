/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-10-22 10:01:27
 * @LastEditTime: 2021-10-22 10:03:59
 * @LastEditors: rodchen
 */
import React, { useState, useEffect, useRef, useContext, useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  debugger
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

function App () {
  return (
    <>
      <span>
        <button>
          <Counter/>
        </button>
      </span>
    </>
  )
}

export default App;