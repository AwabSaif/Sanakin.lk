import React from 'react'
import './Star.css'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import useToggle from '../../hooks/useToggle';

export default function Star({}) {
  const [on, toggle] = useToggle()

  return (
    <>{
      on ? 
      <FaStar  onClick={toggle} className="star filled" />:
      <FaStar  onClick={toggle} className="star" />
    }
   
     </>
  )
}
