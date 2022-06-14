import React from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const FilterLink = (props) => {
  const base_class = 'flex flex-row justify-between items-center cursor-pointer py-2 px-5 hover:bg-blue-100 '
  const active_class = 'bg-blue-100'
  const location = useLocation()
  //   console.log(location)
  const search = new URLSearchParams(location.search)

  return (
    <Link
      to={`${location.pathname}?category=${props.category}`}
      className={`${base_class + (search.get('category') === props.category ? active_class : '')} `}>
      {props.children}
    </Link>
  )
}

export default FilterLink
