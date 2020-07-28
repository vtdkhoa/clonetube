import React from 'react'
import App from '../App'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const store = mockStore({})

describe('App', () => {
  test('renders', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App/>
      </Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})