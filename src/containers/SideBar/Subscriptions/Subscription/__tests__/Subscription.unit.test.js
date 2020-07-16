import React from 'react'
import Subscription from '../Subscription'
import { shallow } from 'enzyme'

describe('Subscription', () => {
  test('renders empty subscription', () => {
    const wrapper = shallow(<Subscription/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders broadcasting subscription', () => {
    const wrapper = shallow(
      <Subscription broadcasting label="Sample label"/>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('renders non-broadcasting subscription with new videos', () => {
    const wrapper = shallow(
      <Subscription amountNewVideos={10} label="Sample label"/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})