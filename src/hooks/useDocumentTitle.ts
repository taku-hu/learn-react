import { useEffect } from 'react'

export function useDocumentTitle (count: number) {
  useEffect(() => {
    document.title = `カウント: ${count}`
  }, [count])
}
