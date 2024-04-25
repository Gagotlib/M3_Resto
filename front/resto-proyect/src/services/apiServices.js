import axios from "axios"
import { setUserAppointments } from "../redux/userSlice"

const APIURL = "http://localhost:3000"

export const apiService = axios.create({
  baseURL: APIURL,
  headers: {
    "Content-Type": "application/json",
  },
})

//! servicio para el getAppointments
export const getAppointments = async () => {
  try {
    const response = await apiService.get("/appointments")
    return response.data
  } catch (error) {
    throw new Error(`Error al traer los appointments del servidor ${error}`)
  }
}
//! servicio que traiga appointments segun user id
export const getAppointmentsByUserId = async (userId, dispatch) => {
  axios
    .get(`http://localhost:3000/users/${userId}`)
    .then((response) => response.data.appointments)
    .then((appointments) => dispatch(setUserAppointments(appointments)))
    .catch((error) => console.log(error))
}

//! servicio para el get Users
export const getUsers = async () => {
  try {
    const response = await apiService.get("/users")
    return response.data
  } catch (error) {
    throw new Error(`Error al traer los usuarios del servidor ${error}`)
  }
}

//! servicio para el post
export const postNewAppointment = async (newAppointment) => {
  try {
    const response = await apiService.post("/appointments/schedule", newAppointment)
    return response
  } catch (error) {
    throw new Error(`Error al guardar la nueva reserva: ${error}`)
  }
}

//! servicio para el put
export const cancelAppointment = async (id) => {
  try {
    const response = await apiService.put(`/appointments/cancel/${id}`)
    return response
  } catch (error) {
    throw new Error(`Error al guardar la nueva reserva ${error}`)
  }
}
