import React from 'react'
import NextUpVideo from '../NextUpVideo'
import { shallow } from 'enzyme'

describe('NextUpVideo', () => {
  test('renders', () => {
    const wrapper = shallow(<NextUpVideo/>)
    expect(wrapper).toMatchSnapshot()
  })
})