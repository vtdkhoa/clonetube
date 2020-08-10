import React from 'react'
import Trending from '../Trending'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const store = mockStore({
  youtubeLibraryLoaded: true,
  videos: [],
  allVideos: false,
  nextPageToken: 'some-next-page-tokens'
})

describe('Trending', () => {
  test('renders', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Trending/>
      </Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})