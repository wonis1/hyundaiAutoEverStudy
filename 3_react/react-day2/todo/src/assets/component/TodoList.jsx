import { useState } from 'react';
import './todoList.css';

// 예시 데이터
// {
//     id: 1,
//     text: 'Learn React',
//     completed: false,
// }

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('all');

    const addTodo = () => {
        if (input.trim() === '') {
            alert('할 일을 입력하세요');
            return;
        }
        const newTodo = {
            id: Date.now(),
            text: input,
            completed: false,
        }
        setTodos([...todos, newTodo]);
        setInput('');
    };

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function toggleTodo(id) {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));

    }

    const filteredTodos = todos.filter(todo => {
        if (filter === 'all') return true;
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
    })

    return (
        <div className="todo-container">
            <h1>Todo List</h1>

            <div className="filter-section">
                <button
                    style={{
                        backgroundColor: filter === 'all' ? '#007bff' : '#f8f9fa',
                        color: filter === 'all' ? 'white' : '#333'
                    }}
                    onClick={() => setFilter('all')}>전체</button>
                <button
                    style={{
                        backgroundColor: filter === 'active' ? '#6504ab' : '#f8f9fa',
                        color: filter === 'active' ? 'white' : '#333'
                    }}
                    onClick={() => setFilter('active')}>진행 중</button>
                <button
                    style={{
                        backgroundColor: filter === 'completed' ? '#28a745' : '#f8f9fa',
                        color: filter === 'completed' ? 'white' : '#333'
                    }}
                    onClick={() => setFilter('completed')}>완료</button>
            </div>
            <input className='input-todo'
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add a new todo"
            />
            <button onClick={() => addTodo()}>
                추가
            </button>

            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#999' : '#000'
                        }}>{todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
                    </li>
                ))}
            </ul>

            {todos.length === 0 && (
                <p>할 일이 없습니다!</p>
            )}

            <div className="todo-stats">
                <p>
                    전체: {todos.length}개
                    완료: {todos.filter(todo => todo.completed).length}개
                    진행 중: {todos.filter(todo => !todo.completed).length}개
                </p>
            </div>
        </div>
    )
}

export default TodoApp;