import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './SideBarItem.scss'

const SideBarItem = props => {
  const active = activeItem(props) ? 'active-item' : null

  return (
    <Link to={{ pathname: props.path }}>
      <Menu.Item className={['sidebar-item', active].join(' ')}>
        <div className="sidebar-item-alignment-container">
          <span>
            <Icon size="large" name={props.icon}/>
          </span>
          <span>{props.label}</span>
        </div>
      </Menu.Item>
    </Link>
  )
}

const activeItem = propsParam => {
  const { location, path } = propsParam
  const { pathname } = location

  if (path === '/') {
    return pathname === path
  }
  return pathname.includes(path)
}

SideBarItem.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string
}

export default withRouter(SideBarItem)