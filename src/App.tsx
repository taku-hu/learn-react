import axios, { AxiosResponse } from 'axios'

import { useReducer, createContext, useState, useEffect } from 'react'

import { counterInitialState, countReducer, CounterState, CounterAction } from 'store/counter'

// components
import ClassCounter from 'components/classComponent/Counter'

import { Counter } from 'components/useState/Counter'
import { Form } from 'components/useState/Form'
import { Items } from 'components/useState/Items'

import { ClickCounter } from 'components/useEffect/EffectHook'
import { MouseEventEffect } from 'components/useEffect/MouseEventEffect'
import { DataFetch } from 'components/useEffect/DataFetch'
import { DataFetchById } from 'components/useEffect/DataFetchById'

import { CounterReducer } from 'components/useReducer/CounterReducer'

import { Parent } from 'components/createContext/Parent'
import { BrotherA } from 'components/createContext/BrotherA'
import { BrotherB } from 'components/createContext/BrotherB'
import { BrotherC } from 'components/createContext/BrotherC'

import { WrapComponent } from 'components/useCallback/WrapComponent'

import { Check } from 'components/useMemo/Check'

import { FocusInput } from 'components/useRef/FocusInput'
import { CountRef } from 'components/useRef/CountRef'

import { DocTitleUpdateOne } from 'components/costumHook/DocTitleUpdateOne'
import { DocTitleUpdateTwo } from 'components/costumHook/DocTitleUpdateTwo'
import { FormSubmit } from 'components/costumHook/FormSubmit'

// types
import type { Dispatch, Reducer } from 'react'
import type { Post } from 'types/response-types'

const CountContext = createContext({} as { counterState: CounterState; counterDispatch: Dispatch<CounterAction>})

// user data
type Person = {
  name: string;
  age: number;
}
const UserContext = createContext({} as Person)
const LangugaeContext = createContext('')

// post
const postInitialState = {
  loading: true,
  post: {} as Post,
  error: ''
}
type PostState = typeof postInitialState
type PostAction = { type: 'success'; payload: Post } | { type: 'error' }
const postReducer: Reducer<PostState, PostAction> = (state, action) => {
  switch (action.type) {
    case 'success':
      return {
        loading: false,
        post: action.payload,
        error: ''
      }
    case 'error':
      return {
        ...state,
        loading: false,
        error: 'データの取得に失敗しました'
      }
  }
}

export default function App () {
  const [counterState, counterDispatch] = useReducer(countReducer, counterInitialState)

  const [user] = useState({ name: 'Yamada', age: 32 })
  const [language] = useState('Japanese')

  const [postState, postDispatch] = useReducer(postReducer, postInitialState)

  useEffect(() => {
    (async () => {
      try {
        const { data }: AxiosResponse<Post> = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        postDispatch({ type: 'success', payload: data })
      } catch {
        postDispatch({ type: 'error' })
      }
    })()
  }, [])

  return (
    <div style={{ margin: '3rem' }}>
      <CountContext.Provider value={{ counterState, counterDispatch }}>
        <UserContext.Provider value={user}>
          <LangugaeContext.Provider value={language}>
            <ClassCounter />
            <Counter />
            <Form />
            <Items />

            <ClickCounter />
            <MouseEventEffect />
            <DataFetch />
            <DataFetchById />

            <Parent />

            <CounterReducer />

            <h1>useContext + useReducer</h1>
            <h2>{counterState.firstCounter}</h2>
            <BrotherA />
            <BrotherB />
            <BrotherC />

            <h1>useReducer: API Request</h1>
            <h2>{postState.loading ? 'loading...' : postState.post.title}</h2>
            <h3>{postState.error ? postState.error : null}</h3>

            <WrapComponent />

            <Check />

            <FocusInput />
            <CountRef />

            <DocTitleUpdateOne />
            <DocTitleUpdateTwo />
            <FormSubmit />
          </LangugaeContext.Provider>
        </UserContext.Provider>
      </CountContext.Provider>
    </div>
  )
}

export { CountContext, UserContext, LangugaeContext }
