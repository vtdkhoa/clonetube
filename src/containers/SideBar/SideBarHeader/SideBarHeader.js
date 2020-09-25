import React from 'react'
import { Menu } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './SideBarHeader.scss'

const SideBarHeader = ({ title }) => {
  const header = title ? title.toUpperCase() : ''

  return (
    <Menu.Item>
      <Menu.Header className="side-bar-header">
        {header}
      </Menu.Header>
    </Menu.Item>
  )
}

SideBarHeader.propTypes = {
  title: PropTypes.string
}

export default SideBarHeader