import { Component } from 'react'

type State = {
  count: number
}

class ClassCounter extends Component<any, State> {
  constructor (props: any) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <div>
        <h1>Class Component: Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementCount}>カウント +</button>
      </div>
    )
  }
}

export default ClassCounter
