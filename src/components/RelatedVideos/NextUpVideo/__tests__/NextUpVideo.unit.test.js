import React from 'react'
import NextUpVideo from '../NextUpVideo'
import { shallow } from 'enzyme'

describe('NextUpVideo', () => {
  test('renders', () => {
    const video = {
      id: 'some-id'
    }
    const wrapper = shallow(
      <NextUpVideo video={video}/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})