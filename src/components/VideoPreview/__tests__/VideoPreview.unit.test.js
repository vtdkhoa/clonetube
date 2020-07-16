import React from 'react'
import VideoPreview from '../VideoPreview'
import { shallow } from 'enzyme'

describe('VideoPreview', () => {
  test('renders', () => {
    const wrapper = shallow(<VideoPreview/>)
    expect(wrapper).toMatchSnapshot()
  })
})