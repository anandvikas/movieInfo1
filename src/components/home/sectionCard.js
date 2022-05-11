import React from 'react'
import { Link } from 'react-router-dom'

const SectionCard = (props) => {  
  return (
    <div className='sectionCard'><Link className='scl' to={`/${props.path}/${props.media}?${props.query}&page=1`}>{props.text}</Link></div>
  )
}
export default SectionCard