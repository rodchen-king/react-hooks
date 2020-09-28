import React from 'react';
import ReactDOM from 'react-dom';

let memoizedState = []; // hooks 存放在这个数组
let cursor = 0; // 当前 memoizedState 下标

function useState(initialValue) {
  const currentCursor = cursor;
  cursor++;
  memoizedState[currentCursor] = memoizedState[currentCursor] || initialValue;

  debugger
  function setState(newState) {
    memoizedState[currentCursor] = newState;
    cursor = 0;
    render();
  }
  return [memoizedState[currentCursor], setState]; // 返回当前 state，并把 cursor 加 1
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('rodchen');

  return (
    <div>
      <div>{count}</div>
      <div>{name}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击
      </button>
      <button onClick={() => setName(name + ' 11 ')}>
        重置姓名
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");

function render() {
  ReactDOM.render(<App />, rootElement);
}
render();

