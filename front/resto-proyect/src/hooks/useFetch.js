import { useEffect, useState } from "react"
import { getAppointments, getUsers } from "../services/apiServices"

export const useFetch = (endpoint) => {
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (endpoint === "users") {
          const users = await getUsers()
          setData(users)
        }
        if (endpoint === "appointments") {
          const appointments = await getAppointments()
          setData(appointments)
        }
      } catch (error) {
        setError(error.message)
      }
    }
    fetchData()
  }, [endpoint])
  return { data, error }
}
