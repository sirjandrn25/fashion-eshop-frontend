import React from 'react'
import Input from './Input'

const InputField = (props) => {
  const base_class = 'grid grid-cols-1 gap-2 items-center w-auto '
  return (
    <div className={base_class + props.className}>
      <label htmlFor='' className='text-lg text-gray-600 capitalize '>
        {props.label}
      </label>
      <Input type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
    </div>
  )
}

export default InputField
