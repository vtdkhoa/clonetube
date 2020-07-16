import React from 'react'
import HeaderNav from '../HeaderNav'
import { shallow } from 'enzyme'

describe('HeaderNav', () => {
  test('renders', () => {
    const wrapper = shallow(<HeaderNav/>)
    expect(wrapper).toMatchSnapshot()
  })
})