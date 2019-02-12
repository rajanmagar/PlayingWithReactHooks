import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function TodoForm({ addTodo }) {
	const [value, setValue] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Add Todo..."
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</form>
	);
}

function App() {
	const [todos, setTodo] = useState([
		{
			text: 'Learn React Hook',
			isComplete: false
		},
		{
			text: 'Learn React',
			isComplete: true
		}
	]);
	const addTodo = text => {
		const newTodo = [...todos, { text }];
		console.log(newTodo, text);
		setTodo(newTodo);
	};
	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isComplete = true;
		setTodo(newTodos);
	};
	return (
		<div className="App">
			{todos.map((todo, index) => (
				<div>
					<p
						key={index}
						style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}>
						{todo.text}
					</p>
					<button onClick={() => completeTodo(index)}>Complete</button>
				</div>
			))}
			<TodoForm addTodo={addTodo} />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
