import React, { useState, useEffect } from 'react';

function Example () {
  // hooks
  const [count, setCount] = useState(0);
  useEffect(() => {
    // didmount
    setTimeout(() => {
      console.log('print log after 1s!');
    }, 1000);
    window.addEventListener('load', loadHandle);

    // willunmont
    return () => {
      console.log('清除')
      window.removeEventListener('load', loadHandle);
    }
  })

  const loadHandle = () => {
    console.log('load document')
  }

  return (
    <div>
      <h3>useEffect</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Example;