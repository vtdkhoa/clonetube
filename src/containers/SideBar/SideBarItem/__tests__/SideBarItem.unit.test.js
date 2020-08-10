import React from 'react'
import SideBarItem from '../SideBarItem'
import { shallow } from 'enzyme'

describe('SideBarItem', () => {
  test('renders empty SideBarItem', () => {
    const wrapper = shallow(<SideBarItem/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders highlighted SideBarItem that navigates to /feed/trending', () => {
    const wrapper = shallow(
      <SideBarItem
        highlighted
        icon="fire"
        label="Trending"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('renders non-highlighted SideBarItem that navigated to /feed/trending', () => {
    const wrapper = shallow(
      <SideBarItem
        icon="fire"
        label="Trending"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('renders highlighted SideBarItem with no navigation', () => {
    const wrapper = shallow(
      <SideBarItem
        highlighted
        icon="fire"
        label="Trending"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})