import React from 'react'
import VideoPreview from '../VideoPreview'
import { shallow } from 'enzyme'

const mockUpVideoProps = {
  snippet: {
    publishedAt: "published at",
    title: "title",
    thumbnails: {
      medium: {
        url: "url",
      }
    },
    channelTitle: "channel title",
    contentDetails: {
      duration: "duration"
    },
    statistics: {
      viewCount: "view count"
    }
  }
}

describe('VideoPreview', () => {
  test('renders with props video = {}', () => {
    const wrapper = shallow(
      <VideoPreview video={mockUpVideoProps}/>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('renders vertically', () => {
    const wrapper = shallow(
      <VideoPreview video={mockUpVideoProps} horizontal={false}/>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('renders horizontally', () => {
    const wrapper = shallow(
      <VideoPreview video={mockUpVideoProps} horizontal={true}/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})