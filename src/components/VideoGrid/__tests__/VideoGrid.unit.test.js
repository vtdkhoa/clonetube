import React from 'react'
import VideoGrid from '../VideoGrid'
import { shallow } from 'enzyme'

describe('VideoGrid', () => {
  test('renders without props', () => {
    const wrapper = shallow(<VideoGrid/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders with title prop', () => {
    const wrapper = shallow(
      <VideoGrid title="Trending"/>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('renders with divider', () => {
    const wrapper = shallow(
      <VideoGrid hideDivider={true}/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})