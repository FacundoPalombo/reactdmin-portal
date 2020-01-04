import React from 'react'
import { Layout } from '.'

export const withContent = ({ children }) => (
  <Layout>
    <article>
      <div>anything</div>
      {children}
      <div>more</div>
    </article>
  </Layout>
)
