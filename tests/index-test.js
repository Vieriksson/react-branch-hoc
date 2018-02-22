import expect from 'expect'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import branch from 'src/'

describe('Branch HOC', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('test true -> render true component', () => {
    // arrange
    const fn = () => true
    const trueComponent = () => <div>true</div>
    const falseComponent = () => <div>false</div>

    // act
    const Result = branch(fn, trueComponent)(falseComponent)

    // assert
    render(<Result />, node, () => {
      expect(node.innerHTML).toContain('true')
    })
  })

  it('test false -> render false component', () => {
    // arrange
    const fn = () => false
    const trueComponent = () => <div>true</div>
    const falseComponent = () => <div>false</div>

    // act
    const Result = branch(fn, trueComponent)(falseComponent)

    // assert
    render(<Result />, node, () => {
      expect(node.innerHTML).toContain('false')
    })
  })
})
