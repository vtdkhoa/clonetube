import React from 'react'
import Comment from '../Comment'
import { shallow } from 'enzyme'

describe('Comment', () => {
  test('renders', () => {
    const wrapper = shallow(<Comment/>)
    expect(wrapper).toMatchSnapshot()
  })
})