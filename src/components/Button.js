import * as React from 'react'
import cn from 'classnames'

export const Button = ({ children, className }) => {
  return <button className={cn(className)}>{children}</button>
}