import React from 'react'
import AppLayout from '../AppLayout'
import { shallow } from 'enzyme'

test('renders <AppLayout/> no children', () => {
  const wrapper = shallow(<AppLayout/>)
  expect(wrapper).toMatchSnapshot()
})

test('renders <AppLayout/> with one child', () => {
  const wrapper = shallow(
    <AppLayout>
      <div>Child</div>
    </AppLayout>
  )
  expect(wrapper).toMatchSnapshot()
})

test('renders <AppLayout/> with children', () => {
  const wrapper = shallow(
    <AppLayout>
      <div>Child</div>
      <div>
        <span>Child</span>
        <p>Child</p>
      </div>
    </AppLayout>
  )
  expect(wrapper).toMatchSnapshot()
})