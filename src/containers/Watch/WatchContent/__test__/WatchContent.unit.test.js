import React from 'react'
import WatchContent from '../WatchContent'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const store = mockStore({
  video: {},
  relatedVideos: [],
  channel: {},
  comments: [],
  amountComments: 10000
})

describe('WatchContent', () => {
  test('renders', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <WatchContent
          bottomReachedCallback={jest.fn()}
          showLoader={true}
        />
      </Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})