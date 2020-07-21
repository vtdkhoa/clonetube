import React from 'react'
import AddComment from '../AddComment'
import { shallow } from 'enzyme'

describe('AddComment', () => {
  test('renders', () => {
    const wrapper = shallow(<AddComment/>)
    expect(wrapper).toMatchSnapshot()
  })
})