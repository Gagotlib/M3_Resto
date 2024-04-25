import { isWeekend } from "./dateHelpers"

export const validateNewAppointment = (formData) => {
  const { date, time, description } = formData
  const errors = {}

  // verificar que lafeca no sea fin de semana
  if (isWeekend(date)) {
    errors.date = "Solo tomamos reservas para dias hábiles"
  }

  // Verificar si la fecha es hoy
  const today = new Date()
  const selectedDate = new Date(date)
  if (selectedDate.getDate() === today.getDate() && selectedDate.getMonth() === today.getMonth() && selectedDate.getFullYear() === today.getFullYear()) {
    errors.date = "No se pueden reservar turnos para hoy"
  }
  return errors
}

function validarEmail(email) {
  // Expresión regular para validar un correo electrónico
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export const validateRegister = (userData) => {
  const errors = {}

  if (typeof userData.name !== "string") {
    errors.name = "El nombre debe ser una cadena de texto"
  }
  if (userData.name.length < 2 && userData.name.length > 11) {
    errors.name = "El nombre debe tener entre 2 y 10 caracteres"
  }
  if (userData.username.length < 3 || userData.username.length > 11) {
    errors.username = "El nombre de usuario debe tener entre 4 y 10 caracteres"
  }
  if (userData.password.length < 5) {
    errors.password = "La contraseña debe tener al menos 6 caracteres"
  }
  // userData.nDni = Number(userData.nDni)
  if (typeof userData.nDni !== "number") {
    errors.nDni = "El dni debe ser un número sin puntos ni coma"
  }
  if (userData.nDni < 1000000 || userData.nDni > 99999999) {
    errors.nDni = "El dni debe ser un número entre 1000000 y 99999999"
  }
  if (!validarEmail(userData.email)) {
    errors.email = "El correo electrónico no es válido"
  }
  if (userData.birthDate > new Date()) {
    errors.birthDate = "Fecha de nacimiento invalida"
  }

  return errors
}
