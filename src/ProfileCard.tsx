import React from "react";
import "./ProfileCard.css";

interface ProfileCardProps {
    name: string;
    job: string;
    age?: number;
    location?: string;
    skills?: string[];
}

const ProfileCard = ({
    name,
    job,
    age = 0,
    location = "위치 정보 없음",
    skills = [],
}: ProfileCardProps) => {
    return (
        <div className="profile-card">
            <div className="profile-header">
                <h2 className="profile-name">{name}</h2>
                <p className="profile-job">{job}</p>
            </div>
            <div className="profile-info">
                <p className="profile-age">나이: {age}세</p>
                <p className="profile-location">📍 {location}</p>
            </div>
            <div className="profile-skills">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProfileCard;
