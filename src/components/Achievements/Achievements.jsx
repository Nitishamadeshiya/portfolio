import React from 'react'
import "./Achievements.css"
import { Element } from 'react-scroll'

const Achievements = () => {
  return (
    <Element name='Achievements'>
    <div className='main-achieve'>
        <h1 className="ach">Achievements</h1><br/>
        <div className="list-ach">
            <div className="twe">I got 93.2% marks in ISC Class 12th Board Examination. </div>
            <div className="ten">Ranked in the top 30 among all students in the college, securing eligibility for a branch change based on
            outstanding academic performance.</div>
            <div className="jee">Secured an AIR within top 1% out of 1.5M applicants in JEE Advanced 2023 (0.5% Acceptance Rate).</div>
            <div className="codecon">Ranked 10th out of more than 100 participating teams in Code Conquest, an esteemed team based coding
            competition hosted by the CSE department as part of Concetto at IIT(ISM) Dhanbad.</div>
        </div>
    </div>
    </Element>
  )
}

export default Achievements