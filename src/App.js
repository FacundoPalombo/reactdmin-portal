import React, { useEffect, useState } from 'react'
import './styles.css'
import './App.scss'
import Axios from 'axios'
/**
 * @template App
 * Application template
 */
export const App = () => {
  const [data, setData] = useState({})
  useEffect(async () => {
    const result = await Axios.get('https://jsonplaceholder.typicode.com/users')
    setData(result.data)
  }, [])

  return <div>asd</div>
}
