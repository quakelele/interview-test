import { useState, useEffect } from 'react'

export const useFetchTests = (url: string) => {
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   useEffect(() => {
      const getData = async () => {
         setLoading(true)
         try {
            const response = await fetch(`http://localhost:3100/${url}`)
            if (!response.ok) {
               throw new Error(` err: ${response.status}`)
            }
            const json = await response.json()
            setData(json)
         } catch (err: any) {
            setError(err)
         } finally {
            setLoading(false)
         }
      }
      getData()

      


   }, [url])

   return { data, loading, error }
}
