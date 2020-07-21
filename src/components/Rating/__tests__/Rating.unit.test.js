import React from 'react'
import Rating from '../Rating'
import { shallow } from 'enzyme'

describe('Rating', () => {
  test('renders', () => {
    const wrapper = shallow(<Rating/>)
    expect(wrapper).toMatchSnapshot()
  })
})