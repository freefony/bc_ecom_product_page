import * as React from 'react'
import * as cn from 'classnames'

export const Sizes = ({minSize = 7, maxSize = 13, selectedSize = 9, onSizeChange}) => {
  const options =[]
  for (let i = minSize; i <= maxSize; i++) {
    options.push(
      <li className={cn(
        'uppercase p-2 bg-gray-100',
        { 'border': selectedSize === i }
        )} 
        onClick={() => onSizeChange(i)}>
        {i}
      </li>
    )
  }
  return <ul className='inline gap-2 w-full'>
    <li className='p-2 uppercase'>Size: </li>
    {options}
  </ul>
}