import React from 'react'
import CommentsHeader from '../CommentsHeader'
import { shallow } from 'enzyme'

describe('CommentsHeader', () => {
  test('renders with amountComments = null', () => {
    const wrapper = shallow(<CommentsHeader/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders with amountComments = 1000000', () => {
    const wrapper = shallow(
      <CommentsHeader amountComments={1000000}/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})