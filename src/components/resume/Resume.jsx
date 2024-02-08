import React from 'react';
import './resume.css';
import Data from './Data';
import Card from './Card';

const Resume = () => {
  // Calculate the midpoint index
  const midpointIndex = Math.ceil(Data.length / 2);

  // Divide the data into two parts
  const leftData = Data.slice(0, midpointIndex);
  const rightData = Data.slice(midpointIndex);

  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Certifications</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {leftData.map((val, index) => (
            <Card 
              key={index} 
              icon={val.icon} 
              title={val.title} 
              year={val.year} 
              desc={val.desc} 
              url={val.url}
            />
          ))}
        </div>

        <div className="timeline grid">
          {rightData.map((val, index) => (
            <Card 
              key={index} 
              icon={val.icon} 
              title={val.title} 
              year={val.year} 
              desc={val.desc} 
              url={val.url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resume;
