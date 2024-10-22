import React from 'react'
import './MyPrograms.css'
import program_1 from '/src/assets/program_4.jpg'
import program_2 from '/src/assets/program_5.png'
import program_3 from '/src/assets/program_6.jpg'
import program_icon_1 from '/src/assets/program-icon-1.png'
import program_icon_2 from '/src/assets/program-icon-2.png'
import program_icon_3 from '/src/assets/program-icon-3.png'

const programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Java Full Stack</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Learning & Development</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Bulk SMS and Digital Marketing</p>
        </div>
      </div>
    </div>
  )
}

export default programs
