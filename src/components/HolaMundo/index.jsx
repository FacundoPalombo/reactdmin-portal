import React from 'react'

export const HolaMundo = ({ isEnabled = false }) => {
  return (
    <div className='holaMundo'>
      Hello world!
      <ul>
        <li>item1</li>
        <li>item2</li>
      </ul>
    </div>
  )
}
