import React from "react"
import style from "./styles/Appointment.module.css"
import { cancelAppointment, getAppointmentsByUserId } from "../services/apiServices"
import { useDispatch } from "react-redux"

export default function Appointment({ appointment }) {
  const dispatch = useDispatch()
  // console.log(appointment)  // control
  const { id, date, time, userId, status, description } = appointment
  async function handleCancelApp(e) {
    // console.log(appointment.id) // control

    //! no quiero que se pueda cancelar si el turno es hoy.
    const currentDate = new Date() // la fecha actual
    const appointmentDate = new Date(date) // la fecha del turno

    if (appointmentDate.toDateString() === currentDate.toDateString()) {
      alert("La cancelación no es posible. La fecha del turno es hoy.")
      return
    }

    console.log("cancelando turno", appointment) // control

    try {
      //! aviso a la BD
      await cancelAppointment(id)

      //!tendria que volver a traer la info de la bd para que se actualice la lista de turnos
      await getAppointmentsByUserId(userId, dispatch)

      alert("TURNO CANCELADO CORRECTAMENTE")
    } catch (error) {
      alert(`${error.message}`)
      console.log(`Error al actualizar el turno ${error}`)
    }
  }

  return (
    <div className={style.appointmentCard}>
      <h3>
        Fecha: {date}, {time}hs
      </h3>
      <h4>Descripción: {description}</h4>
      <h4>Estado: {status === "active" ? "✅" : "❌"}</h4>
      {status === "active" && <button onClick={handleCancelApp}>Cancelar turno</button>}
    </div>
  )
}
