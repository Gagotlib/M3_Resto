import { getMaxDate, getTodayDate } from "../helpers/dateHelpers"
import { validateNewAppointment } from "../helpers/validations"
import style from "./styles/newAppForm.module.css"
import React, { useEffect, useState } from "react"
import { getAppointmentsByUserId, postNewAppointment } from "../services/apiServices"
import { useSelector, useDispatch } from "react-redux"

export default function NewAppForm({ appointments, setAppointments }) {
  const dispatch = useDispatch()

  // me traigo el usuario del etado global
  const user = useSelector((state) => state.user.user)
  const userId = user.id

  // creacion de estado y valores por defecto
  const [formData, setFormData] = useState({
    date: getTodayDate(),
    time: "08:00",
    description: "",
    userId: user.id,
  })

  const [errors, setErrors] = useState({
    date: "",
    time: "",
    description: "",
  })

  // como el dia por defecto que aparece es el de hoy, debo verificar que "hoy" no sea fin de semana
  useEffect(() => {
    setErrors(validateNewAppointment(formData))
  }, [formData.date])

  function handleInputChange(event) {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))

    setErrors(validateNewAppointment(formData))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    // Si hay errores, mostrar alerta y salir de la función
    const hasErrors = Object.keys(errors).some((key) => errors[key] !== "")
    if (hasErrors) {
      alert(errors.date)
      return
    }
    // control
    console.log("Fecha seleccionada:", formData.date)
    console.log("Hora seleccionada:", formData.time)
    console.log("Descripción:", formData.description)

    try {
      //! enviar info al backend
      await postNewAppointment(formData) // servicio post para mandar la reserva a la BD

      getAppointmentsByUserId(userId, dispatch) // servicio get para traer las reservas

      // Limpiar el formulario
      setFormData({
        date: getTodayDate(),
        time: "08:00",
        description: "",
        userId: user.id,
      })

      alert("reserva agendada")
    } catch (error) {
      console.log(error)
    }
  }
  // array para las horas disponibles
  const availableHours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

  return (
    <div className={style.newAppview}>
      <h1>Solicitar una nueva Reserva</h1>
      <form className={style.newAppForm} onSubmit={handleSubmit}>
        <div className={style.labelInput}>
          <label htmlFor='date'>Seleccione una fecha: </label>
          <input
            type='date'
            name='date'
            id='date'
            value={formData.date}
            min={getTodayDate()}
            max={getMaxDate()}
            onChange={handleInputChange}
            onInvalid={(e) => e.target.setCustomValidity("Seleccione un día hábil entre hoy y dentro de 2 meses")}
            onInput={(e) => e.target.setCustomValidity("")}
            required
            pattern='\d{4}-\d{2}-\d{2}'
          />
          {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
        </div>
        <div className={style.labelInput}>
          <label htmlFor='time'>Hora: </label>
          <select id='time' name='time' value={formData.time} onChange={handleInputChange} required>
            {availableHours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        </div>
        <div className={style.labelInput}>
          <label htmlFor='description'>Ingresa una descripción: </label>
          <textarea rows='2' id='description' name='description' placeholder='Descripción, por ejemplo: 4 personas' value={formData.description} onChange={handleInputChange} />
        </div>
        <button type='submit'>Solicitar</button>
      </form>
    </div>
  )
}
