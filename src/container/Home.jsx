import React from 'react'
import { connect } from 'react-redux'
import { Layout } from '../components/Layout'

const HomeContainer = ({ data }) => {
  return (
    <Layout asd a s ww f ss agzx as={null} fx={null} svxv={null}>
      Hello data! {data}
    </Layout>
  )
}

const mapStateToProps = ({ data }) => {
  return {
    data
  }
}

export const Home = connect(mapStateToProps, null)(HomeContainer)
