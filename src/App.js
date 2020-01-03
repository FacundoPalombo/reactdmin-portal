import React, { useEffect, useState } from 'react'
import './styles.css'
import './App.scss'
import { Home } from './container/Home'
import { BrowserRouter, Route } from 'react-router-dom'

/**
 * @template App
 * Application template
 */
export const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
    </BrowserRouter>
  )
}
