import React, { useState } from "react";

const TodoList = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState<string[]>([]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleAdd = () => {
        setTodos([...todos, input]);
    };

    const handleClick = (id: number) => {
        setTodos(todos.filter((_, index) => index !== id));
    };

    return (
        <section>
            <input type="text" value={input} onChange={handleInput} />
            <button onClick={handleAdd}>추가</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleClick(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TodoList;
