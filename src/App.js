import React, { useState } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  const [name, setName] = useState('rodchen');

  return (
    <div>
      <p>your name: { name }</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setName('rod chen')}>
        重置姓名
      </button>
    </div>
  )
}

export default Example;