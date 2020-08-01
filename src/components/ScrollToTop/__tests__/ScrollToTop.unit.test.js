import React from 'react'
import ScrollToTop from '../ScrollToTop'
import { shallow } from 'enzyme'

describe('ScrollToTop', () => {
  test('renders without children props', () => {
    const wrapper = shallow(<ScrollToTop/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders with children props', () => {
    const wrapper = shallow(
      <ScrollToTop>
        <div>Children Props</div>
      </ScrollToTop>
    )
    expect(wrapper).toMatchSnapshot()
  })
})