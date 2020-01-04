import React from 'react'
import { connect } from 'react-redux'
import { Layout } from '../components/Layout'
import { setData, getData } from '../actions'

const HomeContainer = props => {
  const { data, setData } = props
  console.log(props)
  return (
    <Layout>
      Hello data! {data} <button onClick={setData}>Change data</button> <button onClick={getData}>Get data</button>
    </Layout>
  )
}

const mapStateToProps = ({ data }) => {
  return {
    data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setData: () => dispatch(setData('here goes the data')),
    getData: () => dispatch(getData('new data'))
  }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
