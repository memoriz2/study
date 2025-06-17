import React, { useState, useEffect } from "react";

const NumberList = () => {
    const [input, setInput] = useState("");
    const [numbs, setNumbs] = useState<number[]>([]);
    const [total, setTotal] = useState(0);
    const [avg, setAvg] = useState(0);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleAdd = () => {
        if (input !== "") {
            setNumbs([...numbs, Number(input)]);
            setInput("");
        }
    };

    useEffect(() => {
        const sum = numbs.reduce((acc, curr) => acc + curr, 0);
        setTotal(sum);
        setAvg(numbs.length > 0 ? sum / numbs.length : 0);
    }, [numbs]);

    const handleDel = (id: number) => {
        setNumbs(numbs.filter((_, index) => index !== id));
    };

    return (
        <section>
            <input
                type="number"
                value={input}
                onChange={handleInput}
                placeholder="숫자를 입력하세요"
            />
            <button onClick={handleAdd}>추가</button>
            <ul>
                {numbs.map((numb: number, id: number) => (
                    <li key={id}>
                        {numb}
                        <button onClick={() => handleDel(id)}>삭제</button>
                    </li>
                ))}
            </ul>
            <div>
                {numbs.length === 0 ? (
                    <p>숫자를 추가해주세요</p>
                ) : (
                    <>
                        <p>합계: {total}</p>
                        <p>평균: {avg.toFixed(2)}</p>
                    </>
                )}
            </div>
        </section>
    );
};

export default NumberList;
