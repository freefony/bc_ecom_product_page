import * as React from 'react'
import { DropDown, DropDownItem, DropDownOptions } from '../components/Dropdown'

export const ColorSelect = ({ colors, selectedColor, onColorChange, sample }) => {
  const [isOpen, toggleIsOpen] = React.useState(false)

  const handleClick = () => {
    toggleIsOpen(!isOpen)
  }
  const items = colors.filter(color => (color !== selectedColor))
    .map(color => {
      return <DropDownItem onClick={() => onColorChange(color)} key={color}>
        {color}
      </DropDownItem>
    })
  return <DropDown className='border w-full text-center font-gray-600'>
    <DropDownItem isSelected onClick={() => handleClick(!isOpen)}>
      {selectedColor}
    </DropDownItem>
    <DropDownOptions isOpen={isOpen}>
      {items}
    </DropDownOptions>
  </DropDown>
}