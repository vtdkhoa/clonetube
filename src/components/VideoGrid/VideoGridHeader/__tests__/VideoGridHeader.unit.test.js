import React from 'react'
import VideoGridHeader from '../VideoGridHeader'
import { shallow } from 'enzyme'

describe('VideoGridHeader', () => {
  test('renders without props', () => {
    const wrapper = shallow(<VideoGridHeader/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders with empty title', () => {
    const wrapper = shallow(
      <VideoGridHeader title=""/>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('renders with title', () => {
    const wrapper = shallow(
      <VideoGridHeader title="Sample title"/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})