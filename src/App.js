import React, { useEffect, useState } from 'react'
import './styles.css'
import './App.scss'
import Axios from 'axios'
import { Products } from './utils/mocks/services/api'

/**
 * @template App
 * Application template
 */
export const App = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    const products = new Products()
    products
      .deleteOne(item => item.email === 'emenhenitt0@smugmug.com')
      .then(data => setData(data))
      .catch(err => console.error(err))
  }, [])
  console.log(data)
  return <div>asd</div>
}
