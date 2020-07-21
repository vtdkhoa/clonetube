import React from 'react'
import Comments from '../Comments'
import { shallow } from 'enzyme'

describe('Comments', () => {
  test('renders without props', () => {
    const wrapper = shallow(<Comments/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('renders with amountComments', () => {
    const wrapper = shallow(
      <Comments amountComments={1000000}/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})