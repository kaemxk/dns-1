import { useState, useEffect } from 'react'

interface Position {
  lat: number
  lon: number
}

export const usePosition = () => {
  const [position, setPosition] = useState<Position>({ lat: 0, lon: 0 })
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude

          setPosition({ lat, lon })
        },
        err => {
          if (err instanceof window.GeolocationPositionError) {
            setError(err.message)
          }
        },
      )
    } else {
      setPosition({ lat: 0, lon: 0 })
    }
  }, [])

  return { position, error }
}
