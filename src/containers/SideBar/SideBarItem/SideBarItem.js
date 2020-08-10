import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import './SideBarItem.scss'

class SideBarItem extends Component {
  shouldBeHighlighed() {
    const { pathname } = this.props.location

    if (this.props.path === '/') {
      return pathname === this.props.path
    }
    return pathname.includes(this.props.path)
  }

  render() {
    // React will ignore custom boolean attributes. therefore I pass a string
    // by using this attribute in our SCSS for styling
    const highlight = this.shouldBeHighlighed() ? 'highlight-item' : null

    return (
      <Link to={{ pathname: this.props.path }}>
        <Menu.Item className={['sidebar-item', highlight].join(' ')}>
          <div className="sidebar-item-alignment-container">
            <span>
              <Icon size="large" name={this.props.icon}/>
            </span>
            <span>{this.props.label}</span>
          </div>
        </Menu.Item>
      </Link>
    )
  }
}

export default withRouter(SideBarItem)