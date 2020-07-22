import React from 'react'
import HomeContent from '../HomeContent'
import { shallow } from 'enzyme'

describe('HomeContent', () => {
  test('renders', () => {
    const wrapper = shallow(<HomeContent/>)
    expect(wrapper).toMatchSnapshot()
  })
})