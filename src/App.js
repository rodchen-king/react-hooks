import React, { useState, useEffect } from 'react';

function Example () {
  // hooks
  const [count, setCount] = useState(0);
  const [name, setName] = useState('rodchen');

  useEffect(() => {
    console.log('更新state!');
  }, [name])


  return (
    <div>
      <h3>useEffect</h3>
      <p>You clicked {count} times</p>
      <p>{name}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setName(name + ' - ')}>
        更新姓名
      </button>
    </div>
  )
}

export default Example;