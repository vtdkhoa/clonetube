import React from 'react'
import VideoInfoBox from '../VideoInfoBox'
import { shallow } from 'enzyme'

describe('VideoInfoBox', () => {
  test('renders collapsed', () => {
    const wrapper = shallow(<VideoInfoBox/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders expanded', () => {
    const wrapper = shallow(<VideoInfoBox/>)
    wrapper.setState({ collapsed: false })
    expect(wrapper).toMatchSnapshot()
  })
})