import { useCallback, useEffect, useState } from 'react'
import { mockLoan } from '../data/loanData'

/**
 * useLoan
 * ------------------------------------------------------------
 * Simulates GET /api/loans/:id. Replace the body of `load()` with
 * a real fetch call — the loading/error/empty/success state machine
 * and every consumer of this hook stay unchanged.
 *
 * status: 'loading' | 'error' | 'empty' | 'success'
 */
export function useLoan(loanId) {
  const [status, setStatus] = useState('loading')
  const [loan, setLoan] = useState(null)
  const [error, setError] = useState(null)

  const load = useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      // Replace with:
      // const res = await fetch(`/api/loans/${loanId}`)
      // if (!res.ok) throw new Error(`Request failed (${res.status})`)
      // const json = await res.json()
      const json = await mockFetchLoan(loanId)

      if (!json) {
        setStatus('empty')
        return
      }
      setLoan(json)
      setStatus('success')
    } catch (err) {
      setError(err.message || 'Something went wrong while loading this loan.')
      setStatus('error')
    }
  }, [loanId])

  useEffect(() => {
    load()
  }, [load])

  return { status, loan, error, reload: load }
}

function mockFetchLoan() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockLoan), 700)
  })
}
