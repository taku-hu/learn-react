import { useReducer } from 'react'
import type { Reducer } from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 10
}

type State = typeof initialState
type Action = { type: 'increment1' | 'decrement1' | 'increment2' | 'decrement2'; value: number } | { type: 'reset' }

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'increment1':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement1':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'reset':
      return initialState
  }
}

export function CounterReducer () {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>useReducer: Counter</h1>
      <h2>カウント1: {count.firstCounter}</h2>
      <h2>カウント2: {count.secondCounter}</h2>
      <button onClick={() => dispatch({ type: 'increment1', value: 1 })}>increment1</button>
      <button onClick={() => dispatch({ type: 'decrement1', value: 1 })}>decrement1</button>
      <button onClick={() => dispatch({ type: 'increment2', value: 10 })}>increment2</button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 10 })}>decrement2</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  )
}
