import React from 'react'
import AboutBox from './AboutBox'

const TimepassedComponent = () => {
  return (
    <div className="about__wrapper">
            <h2 className="section__heading">Hours Spent In...</h2>
            <div className="about__boxes grid">
                <AboutBox iconSrc="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/figma/figma-original.svg" title="Figma" startDate="2022-01-01" weeklyFrequency={20} />
                <AboutBox iconSrc="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/vscode/vscode-original.svg" title="VSCode" startDate="2022-11-01" weeklyFrequency={15} />
                <AboutBox iconSrc="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/blender/blender-original.svg" title="Blender" startDate="2021-12-01" weeklyFrequency={10} />
                <AboutBox iconSrc="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/linux/linux-original.svg" title="Linux" startDate="2021-09-01" weeklyFrequency={70} />
            </div>
        </div>
  )
}

export default TimepassedComponent