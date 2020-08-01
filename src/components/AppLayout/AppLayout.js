import React from 'react'
import HeaderNav from '../../containers/HeaderNav/HeaderNav'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import './AppLayout.scss'

const AppLayout = props => {
  return (
    <ScrollToTop>
      <div className="app-layout">
        <HeaderNav/>
        {props.children}
      </div>
    </ScrollToTop>
  )
}

export default AppLayout