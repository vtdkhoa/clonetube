import React from 'react'
import VideoList from '../VideoList'
import { shallow } from 'enzyme'

const mockUpVideos = [
  {
    id: 'videoId',
    snippet: {
      description: 'video description'
    }
  }
]

describe('VideoList', () => {
  test('renders without props', () => {
    const wrapper = shallow(<VideoList/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders with videos props', () => {
    const wrapper = shallow(
      <VideoList videos={mockUpVideos}/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})