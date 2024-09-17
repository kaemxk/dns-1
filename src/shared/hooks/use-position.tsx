import { useState, useEffect } from 'react'

interface Position {
  lat: number
  lon: number
}

export const usePosition = () => {
  const [position, setPosition] = useState<Position>()
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(result => {
          if (result.state === 'granted') {
            navigator.geolocation.getCurrentPosition(position => {
              const lat = position.coords.latitude
              const lon = position.coords.longitude

              setPosition({ lat, lon })
            })
          } else {
            navigator.geolocation.getCurrentPosition(
              () => {},
              () => {},
            )
          }
        })
        .catch(err => {
          setError((err as Error).message)
        })
    }
  }, [])

  return { position, error }
}
