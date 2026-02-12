import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  //Store에서 데이터 가져오기
  const count = useSelector((state) => state.counter.value);
  // dispatch 함수 가져오기
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({'type': 'counter/increment'})}>+1</button>
      <button onClick={() => dispatch({'type': 'counter/increment'})}>-1</button>
      <button onClick={() => dispatch({'type': 'counter/increment'})}>초기화</button>
    </>
  )
}

export default App
