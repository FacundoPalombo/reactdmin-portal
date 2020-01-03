import React from 'react'
import { HolaMundo } from './HolaMundo'

export default { title: 'Hola Mundo' }

export const withProps = ({ isEnabled }) => <HolaMundo>{isEnabled}</HolaMundo>
export const withoutProps = () => <HolaMundo></HolaMundo>
