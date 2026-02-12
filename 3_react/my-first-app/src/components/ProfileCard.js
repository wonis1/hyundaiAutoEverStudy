import React from 'react';

import './ProfileCard.css';

function ProfileCard() {
    return (
        <div className="profile-card">
            <img 
                src="https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8="
                alt="Profile Image"
                className="profile-image"
            />
            <h2>정재원</h2>
            <p>프론트엔드 개발자</p>
            <p>이메일: example@example.com</p>
        </div>
    )
}

export default ProfileCard;