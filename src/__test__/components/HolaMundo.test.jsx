import React from 'react'
import { mount } from 'enzyme'

import { HolaMundo } from '../../components/HolaMundo'

describe('<HolaMundo />', () => {
  test('Render del componente HolaMundo', () => {
    const holaMundo = mount(<HolaMundo />)
    console.log(holaMundo)
    expect(holaMundo).not.toBe(null)
  })
})
