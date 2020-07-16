import React from 'react'
import Video from '../Video'
import { shallow } from 'enzyme'

describe('Video', () => {
  test('renders video component correctly', () => {
    const wrapper = shallow(
      <Video id="12345"/>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('renders null if id prop not specified', () => {
    const wrapper = shallow(<Video/>)
    expect(wrapper).toMatchSnapshot()
  })
})