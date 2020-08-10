import React from 'react'
import VideoPreview from '../VideoPreview'
import { shallow } from 'enzyme'

const mockUpVideoProps = {
  snippet: {
    publishedAt: "2020-07-22T16:00:05Z",
    title: "The Weeknd - Snowchild (Official Video)",
    thumbnails: {
      medium: {
        url: "https://i.ytimg.com/vi/G0JKdFjWkLA/mqdefault.jpg",
      }
    },
    channelTitle: "TheWeekndVEVO",
    contentDetails: {
      duration: "PT4M12S"
    },
    statistics: {
      viewCount: "1523688"
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
      <VideoPreview
        video={mockUpVideoProps}
        horizontal={false}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('renders horizontally', () => {
    const wrapper = shallow(
      <VideoPreview
        video={mockUpVideoProps}
        horizontal={true}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('renders Trending', () => {
    const wrapper = shallow(
      <VideoPreview
        video={mockUpVideoProps}
        horizontal={true}
        expanded={true}
        description={'some-video-descriptions'}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})