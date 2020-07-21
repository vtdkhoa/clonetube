import React from 'react'
import RelatedVideos from '../RelatedVideos'
import { shallow } from 'enzyme'

describe('RelatedVideos', () => {
  test('renders', () => {
    const wrapper = shallow(<RelatedVideos/>)
    expect(wrapper).toMatchSnapshot()
  })
})