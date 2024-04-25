import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ErrorPage() {

  //! pagina que redirige a home en caso de url erronea
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    setTimeout(() => {
      clearInterval(countdownInterval)
      navigate("/")
    }, 5000)

    return () => clearInterval(countdownInterval)
  }, [navigate])

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Redirecting to home in {countdown} seconds ... </p>
    </div>
  )
}
