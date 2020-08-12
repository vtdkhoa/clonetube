import React from 'react'
import Search from '../Search'
import { shallow } from 'enzyme'

describe('Search', () => {
  test('renders', () => {
    const wrapper = shallow(<Search/>)
    expect(wrapper).toMatchSnapshot()
  })
})