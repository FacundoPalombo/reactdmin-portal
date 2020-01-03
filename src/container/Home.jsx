import React from 'react'
import { connect } from 'react-redux'
import { Layout } from '../components/Layout'

const HomeContainer = ({ data }) => {
  return <Layout>Hello data! {data}</Layout>
}

const mapStateToProps = ({ data }) => {
  return {
    data: data
  }
}

export const Home = connect(mapStateToProps, null)(Home)
