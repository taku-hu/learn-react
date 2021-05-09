const counterInitialState = {
  firstCounter: 0
}

type CounterState = typeof counterInitialState
type CounterAction = { type: 'increment' | 'decrement' | 'reset'; value: number; }

const countReducer = (state: CounterState, { type, value }: CounterAction): CounterState => {
  switch (type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - value }
    case 'reset':
      return counterInitialState
  }
}

export { counterInitialState, countReducer }
export type { CounterAction, CounterState }
