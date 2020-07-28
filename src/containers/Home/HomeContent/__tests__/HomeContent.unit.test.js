import React from 'react'
import HomeContent from '../HomeContent'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const store = mockStore({
  mostPopularVideos: [],
  videosByCategory: []
})

describe('HomeContent', () => {
  test('renders', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <HomeContent
          bottomReachedCallback={jest.fn()}
          showLoader={true}
        />
      </Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})