import React from "react";

type GreetingProps = {
    name: string;
    age: number;
};

const Greeting = (props: GreetingProps) => {
    return (
        <div>
            <h1>안녕하세요, {props.name}님!</h1>
            <p>나이는 {props.age}살이시군요.</p>
        </div>
    );
};

export default Greeting;
