import * as React from 'react'
import { render } from 'react-dom'
import branch from '../../src'

/**
 * Components
 */
const loadingComponent = () => <div>LOADING...</div>
const errorComponent = () => <div>ERROR</div>
const successComponent = () => <div>SUCCESS</div>

/**
 * Functions
 */
const loadingFn = props => props.loading
const errorFn = props => props.error

/**
 * Branches
 */
const SingleBranch = branch(loadingFn, loadingComponent)(successComponent)
const MultipleBranches = branch(loadingFn, loadingComponent)(
  branch(errorFn, errorComponent)(successComponent)
)

/**
 * Demo component
 */

class Demo extends React.Component {
  render() {
    return (
      <div>
        <h1>react-branch-hoc</h1>

        <h3>Single branch</h3>
        <SingleBranch loading={true} />
        <SingleBranch loading={false} />

        <h3>Multiple branches</h3>
        <MultipleBranches loading={true} error={false} />
        <MultipleBranches loading={false} error={false} />
        <MultipleBranches loading={false} error={true} />
      </div>
    )
  }
}

/**
 * Render on DOM
 */
render(<Demo />, document.querySelector('#demo'))
