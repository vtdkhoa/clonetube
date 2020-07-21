import React from 'react'
import VideoMetadata from '../VideoMetadata'
import { shallow } from 'enzyme'

describe('VideoMetadata', () => {
  test('renders without props', () => {
    const wrapper = shallow(<VideoMetadata/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders with view count', () => {
    const wrapper = shallow(
      <VideoMetadata viewCount={12345}/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})