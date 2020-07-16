import React from 'react'
import Subscriptions from '../Subscriptions'
import { shallow } from 'enzyme'

describe('Subscriptions', () => {
  test('renders', () => {
    const wrapper = shallow(<Subscriptions/>)
    expect(wrapper).toMatchSnapshot()
  })
})