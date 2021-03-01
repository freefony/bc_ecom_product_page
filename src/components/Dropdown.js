import * as React from 'react'
import * as cn from 'classnames'
import { ReactComponent as Caret } from '../assets/icons/caret.svg'

export const DropDownItem = ({ children, isSelected, onClick, className}) => {
  return <div className={cn(
    'p-2 flex flex-row justify-between items-center border', className)} onClick={onClick}>
    <div className='bg-gray-100'></div>
    {children}
    {isSelected ? <Caret /> : <span></span>}
  </div>
}

export const DropDownOptions = ({ children, isOpen = false }) => {
  if (!isOpen) return null

  return <div className='dropdown-items-wrap absolute w-full bg-white'>
    {children}
  </div>
}

export const DropDown = ({ children, className }) => {
  return <div className={cn('relative', className)}>
    {children}
  </div>
}