import React from 'react'
import SideBar from '../SideBar'
import { shallow } from 'enzyme'

describe('SideBar', () => {
  test('renders', () => {
    const wrapper = shallow(<SideBar/>)
    expect(wrapper).toMatchSnapshot()
  })
})