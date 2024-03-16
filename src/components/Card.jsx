import React from 'react'
import './Card.css'
import { MdArrowOutward } from "react-icons/md";
import { IoMdArrowUp } from "react-icons/io";
import { SiSimpleanalytics } from "react-icons/si";


const Card = ({props}) => {
  return (
    <div className="card">
        <div className="header">
            <p>{props.title}</p>
            <MdArrowOutward/>      
        </div>
        <h3 className="numbers">{props.numbers}</h3>
        <div className="footer">
            <div className="test">
            <p className="green">
                <IoMdArrowUp/> {props.percent}
            </p>
            <p className="plain"> &nbsp;&nbsp;in the last 7 days</p>
            </div>
            <SiSimpleanalytics className='green' fontSize={20}/>
        </div>
    </div>
  )
}

export default Card