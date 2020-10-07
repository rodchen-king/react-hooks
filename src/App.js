import React, { useState, useEffect, useRef, useContext } from 'react';

const ThemeContext = React.createContext({ theme: "初始值", theme1: "初始值1" });
const { Provider, Consumer } = ThemeContext

function Example () {
  // hooks
  const [count, setCount] = useState(0);
  const [name, setName] = useState('rodchen');

  const theme = useContext(ThemeContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const useDidMount = fn => useEffect(() => fn && fn(), []);

  useDidMount(() => {
    console.log('monted!');
  })

  const useDidUpdate = (fn, conditions) => {
    const didMoutRef = useRef(false);
    useEffect(() => {
      if (!didMoutRef.current) {
        didMoutRef.current = true;
        return;
      }
      // Cleanup effects when fn returns a function
      return fn && fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, conditions);
  };

  useDidUpdate(() => {
    console.log('updated');
  },[name])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const useWillUnmount = fn => useEffect(() => () => fn && fn(), []);

  useWillUnmount(() => {
    console.log('willUnmont');
  })

  return (
    <div>
      <h3>useEffect</h3>
      <p>You clicked {count} times</p>
      <p>{theme.theme}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setName(name + ' - ')}>
        更新姓名
      </button>
    </div>
  )
}

function App () {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Provider value={{ theme: "theme", theme1: "theme1" }}>
        <Example />
      </Provider>
      <span>
        <button>{theme.theme}</button>
      </span>
    </>
  )
}

export default App;