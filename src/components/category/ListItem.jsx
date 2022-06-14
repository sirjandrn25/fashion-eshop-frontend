import React from 'react'

const ListItem = (props) => {
  return (
    <li className=' flex flex-row justify-between items-center cursor-pointer py-2 px-5 hover:bg-gray-100'>
      {props.children}
    </li>
  )
}

export default ListItem
