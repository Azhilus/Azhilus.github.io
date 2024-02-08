import React from 'react';

const Card = (props) => {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">
          <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>
        </h3>
        <p className="timeline__text">{props.desc}</p>
    </div>
  )
}

export default Card;
