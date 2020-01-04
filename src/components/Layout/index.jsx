import React from 'react'
import { Helmet } from 'react-helmet'

/**
 * @method Layout : Main layout for all the pages, will inject SEO with nfl/react-helmet
 * @param {Object} container : Should have the data from the current page to improve better SEO
 * @param {JSX.Element} children : Wrapped content by layout, it should be the content for the current page.
 * @returns {JSX.Element} Layout for the page
 */
export const Layout = ({ children, container = {} }) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{container.title ? container.title : 'Portal de comercio'}</title>
        <link rel='canonical' href='https://mysite.com/example' />
      </Helmet>
      {children}
    </>
  )
}
