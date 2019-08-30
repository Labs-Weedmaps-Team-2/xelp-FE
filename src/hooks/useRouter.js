// hook equivalent to withRouter HOC
// Usage: const {location, history, match } = useRouter()
import { useContext } from 'react'
import { __RouterContext } from 'react-router-dom'

export default function useRouter() {
  return useContext(__RouterContext)
}
