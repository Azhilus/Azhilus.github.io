import React from 'react';
import './about.css';
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';
import TimepassedComponent from './TimepassedComponent';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            I am Shivansh Tomar aka AzHilus, Product Designer from India. I have rich experience in UX Design, Product Design and Product Visualization.
            </p>
            <a href="" className="btn">Download CV</a>
          </div>
          
          <div className="about__skills grid">
            
          <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Product Design</h3>
                <span className="skills__number">95%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage product__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Product Visualization</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage product__viz"></span>
              </div>
            </div>


            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Frontend Development</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage frontend__dev"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TimepassedComponent />
    </section>

  )
}

export default About