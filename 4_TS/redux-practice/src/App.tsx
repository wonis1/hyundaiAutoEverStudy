import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { increment, decrement, reset } from './store/counterSlice';
import { addTodo, toggleTodo, deleteTodo } from './store/todoSlice';
function App() {
  const count = useAppSelector((state) => state.counter.value);
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState('');
  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };
  return (
    <div>
      <h1>Redux Toolkit 연습</h1>
      <h2>카운터: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>리셋</button>
      <hr />
      <h2>할일 목록</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <button onClick={handleAddTodo}>추가</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;