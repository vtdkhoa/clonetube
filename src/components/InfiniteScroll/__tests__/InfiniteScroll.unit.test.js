import React from 'react'
import InfiniteScroll from '../InfiniteScroll'
import { shallow } from 'enzyme'

describe('InfiniteScroll', () => {
  test('renders empty children', () => {
    const wrapper = shallow(<InfiniteScroll/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders with chilren', () => {
    const wrapper = shallow(
      <InfiniteScroll>
        <div>Children props</div>
      </InfiniteScroll>
    )
    expect(wrapper).toMatchSnapshot()
  })
})