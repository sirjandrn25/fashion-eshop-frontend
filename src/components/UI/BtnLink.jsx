import React from 'react'
import { Link } from 'react-router-dom'

const BtnLink = (props) => {
  const base_class = 'border-lg px-3 py-1 shadow shadow-gray-500  text-white rounded-3xl font-medium  '
  return (
    <Link to={props.href} className={base_class + props.className}>
      {props.children}
    </Link>
  )
}

export default BtnLink
