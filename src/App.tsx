import React, { useState } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

function App() {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: "React 공부하기", completed: false },
        { id: 2, text: "TypScript 공부하기", completed: true },
        { id: 3, text: "프로젝트 만들기", completed: false },
    ]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            const newTodoItem: Todo = {
                id: Date.now(),
                text: newTodo,
                completed: false,
            };
            setTodos((prev) => [...prev, newTodoItem]);
            setNewTodo("");
        }
    };

    return (
        <div>
            <h1>할 일 관리 앱</h1>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="새로운 할 일을 입력하세요"
                />
                <button onClick={handleAddTodo}>추가</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text} - {todo.completed ? "완료" : "미완료"}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
