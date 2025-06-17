import React, { useState } from "react";

interface Todo {
    id: number;
    title: string;
    isComplete: boolean;
}

const Todo: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.trim()) {
            const newTodo: Todo = {
                id: Date.now(),
                title: input,
                isComplete: false,
            };
            setTodos([...todos, newTodo]);
            setInput("");
        }
    };

    return (
        <section>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="할 일을 입력하세요"
            />
            <button onClick={handleAdd}>추가</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </section>
    );
};

export default Todo;
