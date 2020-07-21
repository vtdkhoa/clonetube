import React from 'react'
import VideoPreview from '../VideoPreview'
import { shallow } from 'enzyme'

describe('VideoPreview', () => {
  test('renders vertically', () => {
    const wrapper = shallow(<VideoPreview/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders horizontally', () => {
    const wrapper = shallow(
      <VideoPreview horizontal={true}/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})