import React from 'react'
import Watch from '../Watch'
import { shallow } from 'enzyme'

describe('Watch', () => {
  test('renders', () => {
    const wrapper = shallow(<Watch/>)
    expect(wrapper).toMatchSnapshot()
  })
})