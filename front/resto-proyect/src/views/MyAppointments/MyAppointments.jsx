import { useEffect } from "react"
import style from "./MyAppointments.module.css"
import Appointment from "../../components/Appointment"
import NewAppForm from "../../components/NewAppForm"
import { useDispatch, useSelector } from "react-redux"
import { getAppointmentsByUserId } from "../../services/apiServices"

export default function MyAppointments() {
  const dispatch = useDispatch()

  //! traigo al usuario del estado global
  const user = useSelector((state) => state.user.user)
  // console.log(user) // control
  const userId = user.id
  const appointments = useSelector((state) => state.user.userAppointments)
  //ordeno los appointments por fecha
  const sortedAppointments = [...appointments].sort((a, b) => {
    const appointmentA = new Date(a.date)
    const appointmentB = new Date(b.date)
    return appointmentB.getTime() - appointmentA.getTime()
  })

  // me traigo las reservas del usuario al cargar l página
  useEffect(() => {
    getAppointmentsByUserId(userId, dispatch)
  }, [dispatch, userId])

  // console.log("Appointments: ", appointments); // control
  return (
    <div className={style.myAppointmentsview}>
      <h1>Mis Reservas</h1>
      <div className={style.myAppointmentsList}>
        {sortedAppointments && sortedAppointments.length > 0 ? (
          sortedAppointments.map((appointment) => <Appointment key={appointment.id} appointment={appointment}></Appointment>)
        ) : (
          <h2>No tiene Reservas</h2>
        )}
      </div>
      <NewAppForm appointments={appointments}></NewAppForm>
    </div>
  )
}
