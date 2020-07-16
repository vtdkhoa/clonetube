import React from 'react'
import Home from '../Home'
import { shallow } from 'enzyme'

describe('Home', () => {
  test('renders', () => {
    const wrapper = shallow(<Home/>)
    expect(wrapper).toMatchSnapshot()
  })
})