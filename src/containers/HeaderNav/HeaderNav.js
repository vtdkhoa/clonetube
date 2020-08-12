import React, { useState } from 'react'
import { Image, Menu, Form, Input, Icon } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import './HeaderNav.scss'

const HeaderNav = props => {
  const [query, onInputChange] = useState('')

  const onSubmit = () => {
    const escapedSearchQuery = encodeURI(query)
    props.history.push(`/results?search_query=${escapedSearchQuery}`)
  }

  return (
    <Menu borderless className="top-menu" fixed="top">
      <Menu.Item header className="logo">
        <Link to="/">
          <Image src={logo} size="tiny"/>
        </Link>
      </Menu.Item>
      <Menu.Menu className="nav-container">
        <Menu.Item className="search-input">
          <Form onSubmit={onSubmit}>
            <Form.Field>
              <Input
                placeholder="Search"
                size="small"
                action="Go"
                value={query}
                onChange={event => onInputChange(event.target.value)}
              />
            </Form.Field>
          </Form>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Icon className="header-icon" name="video camera" size="large"/>
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="grid layout" size="large"/>
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="chat" size="large"/>
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="alarm" size="large"/>
          </Menu.Item>
          <Menu.Item name="avatar">
            <Image src="http://via.placeholder.com/80x80" avatar/>
          </Menu.Item>
        </Menu.Menu>
      </Menu.Menu>
    </Menu>
  )
}

export default withRouter(HeaderNav)