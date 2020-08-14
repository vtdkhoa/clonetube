import React from 'react'
import { Menu } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './SideBarHeader.scss'

const SideBarHeader = props => {
  const heading = props.title ? props.title.toUpperCase() : ''

  return (
    <Menu.Item>
      <Menu.Header className="side-bar-header">
        {heading}
      </Menu.Header>
    </Menu.Item>
  )
}

SideBarHeader.propTypes = {
  title: PropTypes.string
}

export default SideBarHeader