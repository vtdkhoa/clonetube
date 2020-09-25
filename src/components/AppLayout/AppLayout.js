import React from 'react'
import HeaderNav from '../../containers/HeaderNav/HeaderNav'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import './AppLayout.scss'

const AppLayout = ({ children }) => {
  return (
    <ScrollToTop>
      <div className="app-layout">
        <HeaderNav/>
        {children}
      </div>
    </ScrollToTop>
  )
}

export default AppLayout