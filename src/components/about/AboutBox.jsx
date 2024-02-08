import React from 'react';

const calculateHours = (startDate, weeklyFrequency) => {
    const startDateObj = new Date(startDate);
    const currentDate = new Date();
    const timeDifference = currentDate - startDateObj;
    const totalWeeks = Math.ceil(timeDifference / (7 * 24 * 60 * 60 * 1000));
    const totalHours = totalWeeks * weeklyFrequency;
    return totalHours;
};

const AboutBox = ({ iconSrc, title, startDate, weeklyFrequency }) => {
    const totalHours = calculateHours(startDate, weeklyFrequency);

    return (
        <div className="about__box">
            <img src={iconSrc} alt={title} className="about__icon" />
            <div>
                <h3 className="about__title">{totalHours}</h3>
                <span className="about__subtitle">{title}</span>
            </div>
        </div>
    );
};

export default AboutBox;
