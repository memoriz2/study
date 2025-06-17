import React from "react";

type UserProfileProps = {
    name: string;
    role?: string;
    isActive?: boolean;
};

const UserProfile = ({
    name,
    role = "사용자",
    isActive = true,
}: UserProfileProps) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>역할: {role}</p>
            <p>상태: {isActive ? "활성" : "비활성"}</p>
        </div>
    );
};

export default UserProfile;
