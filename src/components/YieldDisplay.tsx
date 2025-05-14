import { useEffect } from 'react'
import { useYieldStore } from '@/src/store/yieldStore'

export const YieldDisplay = () => {
  const { data, isLoading, error, fetchData } = useYieldStore()

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Yield Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.category}: {item.value}% ({new Date(item.timestamp).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  )
} 