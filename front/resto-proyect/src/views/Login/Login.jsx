import React, { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import style from "../Login/Login.module.css"
import { setUser } from "../../redux/userSlice"
import { useDispatch } from "react-redux"

export default function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData((user) => ({
      ...user,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      //! enviar info al backend
      const response = await axios.post("http://localhost:3000/users/login", loginData)
      // console.log(response.data) // control
      const user = response.data.user

      dispatch(setUser(user))

      navigate("/") //! Redirige a la página principal!
      alert("Login exitoso")
    } catch (error) {
      console.error(error.response.data)
      alert("Usuario o contraseña invalidos")
    }
  }

  return (
    <div className={style.loginview}>
      <h1>Login</h1>
      <form className={style.registerForm} onSubmit={handleSubmit}>
        <div className={style.labelInput}>
          <label htmlFor='username'>Username: </label>
          <input type='text' id='username' name='username' required value={loginData.username} onChange={handleChange} />
        </div>
        <div className={style.labelInput}>
          <label htmlFor='password'>Contraseña: </label>
          <input type='password' id='password' name='password' required value={loginData.password} onChange={handleChange} />
        </div>

        {loginData.username === "" || loginData.password === "" ? (
          <button className={style.buttonDisabled} type='submit' disabled>
            Iniciar sesión
          </button>
        ) : (
          <button className={style.buttonEnabled} type='submit'>
            Iniciar sesión
          </button>
        )}
      </form>
      <div className={style.registerdiv}>
        <h1>Si todavia no tienes una cuenta: </h1>
        <Link to='/register'>Registrate acá</Link>
      </div>
    </div>
  )
}
