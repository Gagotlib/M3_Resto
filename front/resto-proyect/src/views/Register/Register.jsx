// import React from 'react'
// import RegisterForm from '../../components/RegisterForm'
import React, { useState } from "react"
import axios from "axios"
import { validateRegister } from "../../helpers/validations"
import styles from "./Register.module.css"

export default function Register() {
  const [errors, setErrors] = useState({})
  const [userData, setUserData] = useState({
    name: "",
    birthdate: "",
    nDni: "",
    email: "",
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    let { name, value } = e.target
    if (name === "nDni") {
      //pasar el input a tipo number
      value = Number(value)
    }

    setUserData((user) => ({
      ...user,
      [name]: value,
    }))

    setErrors(validateRegister(userData))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // prueba
    console.log(
      `Nombre: ${userData.name}\n`,
      `Fecha de nacimiento: ${userData.birthdate}\n`,
      `ndni es typeof: ${typeof userData.nDni}\n`,
      `nDni: ${userData.nDni}\n`,
      `Correo electrónico: ${userData.email}\n`,
      `Nombre de usuario: ${userData.username}\n`,
      `Contraseña: ${userData.password}`
    )
    //! enviar info al backend
    axios
      .post("http://localhost:3000/users/register", userData)
      .then((response) => {
        console.log(response)
        alert("Registro exitoso")
        setUserData({
          name: "",
          birthdate: "",
          nDni: "",
          email: "",
          username: "",
          password: "",
        })
      })
      .catch((error) => {
        console.error(error.response.data.message)
        alert(error.response.data.message)
      })
  }

  return (
    <div className={styles.registerview}>
      <h1>Registrate</h1>
      <p>Todos los campos son obligatorios</p>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <div className={styles.labelInput}>
          <label htmlFor='name'>Nombre:</label>
          <input type='text' id='name' name='name' required value={userData.name} onChange={handleChange} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div className={styles.labelInput}>
          <label htmlFor='birthdate'>Fecha de nacimiento:</label>
          <input type='date' id='birthdate' name='birthdate' required value={userData.birthdate} onChange={handleChange} />
          {errors.birthDate && <p style={{ color: "red" }}>{errors.birthDate}</p>}
        </div>
        <div className={styles.labelInput}>
          <label htmlFor='nDni'>Número de DNI:</label>
          <input type='number' id='nDni' name='nDni' required value={userData.nDni} onChange={handleChange} />
          {errors.nDni && <p style={{ color: "red" }}> {errors.nDni}</p>}
        </div>
        <div className={styles.labelInput}>
          <label htmlFor='email'>Correo electrónico:</label>
          <input type='email' id='email' name='email' required value={userData.email} onChange={handleChange} />
          {errors.email && <p style={{ color: "red" }}> {errors.email}</p>}
        </div>
        <div className={styles.labelInput}>
          <label htmlFor='username'>Nombre de usuario:</label>
          <input type='text' id='usernameLogin' name='username' required value={userData.username} onChange={handleChange} />
          {errors.username && <p style={{ color: "red" }}> {errors.username}</p>}
        </div>
        <div className={styles.labelInput}>
          <label htmlFor='password'>Contraseña:</label>
          <input type='password' id='passwordLogin' name='password' required value={userData.password} onChange={handleChange} />
          {errors.password && <p style={{ color: "red" }}> {errors.password}</p>}
        </div>
        {Object.keys(errors).length > 0 ? (
          <button className={styles.buttonDisabled} type='submit' disabled>
            Registrarme
          </button>
        ) : (
          <button className={styles.buttonEnabled} type='submit'>
            Registrarme
          </button>
        )}
      </form>
    </div>
  )
}
