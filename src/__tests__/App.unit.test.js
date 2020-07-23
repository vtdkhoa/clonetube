import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const initialState = {
  libraryLoaded: false
}
const store = mockStore(initialState)

describe('App', () => {
  test('renders', () => {
    const wrapper = shallow(
      <App store={store}/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})