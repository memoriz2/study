import React, { useState } from "react";

const Calculator = () => {
    const [numString, setNumString] = useState("");
    const [num, setNum] = useState<number[]>([]);
    const [addTotal, setAddTotal] = useState(0);
    const [minusTotal, setMinusTotal] = useState(0);

    const handleNumString = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumString(e.target.value);
        setNum(e.target.value.split(",").map(Number));
    };

    const handleAdd = () => {
        setAddTotal(num[0] + num[1]);
    };

    const handleMinus = () => {
        setMinusTotal(num[0] - num[1]);
    };

    return (
        <section>
            <input
                type="text"
                placeholder="2,3"
                value={numString}
                onChange={handleNumString}
            />
            <button onClick={handleAdd}>더하기</button>
            <button onClick={handleMinus}>빼기</button>
            <p>더하기 : {addTotal}</p>
            <p>빼기 : {minusTotal}</p>
        </section>
    );
};

export default Calculator;
