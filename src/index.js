import * as React from 'react'

const branch = (test, ifTrueComponent) => ifFalseComponent => {
  return props => {
    if (test(props)) {
      return React.createElement(ifTrueComponent, props)
    }
    return React.createElement(ifFalseComponent, props)
  }
}

export default branch
