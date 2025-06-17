import React from "react";
import "./Card.css";

interface CardProps {
    title: string;
    content: string;
    author?: string;
    likes?: number;
    date?: string;
}

const Card = ({
    title = "",
    content = "",
    author = "익명",
    likes = 0,
    date = "날짜 없음",
}: CardProps) => {
    return (
        <div className="card">
            <h1 className="card-title">{title}</h1>
            <p className="card-content">{content}</p>
            <div className="card-footer">
                <span className="card-author">{author}</span>
                <span className="card-likes">{likes}</span>
                <span className="card-date">{date}</span>
            </div>
        </div>
    );
};

export default Card;
