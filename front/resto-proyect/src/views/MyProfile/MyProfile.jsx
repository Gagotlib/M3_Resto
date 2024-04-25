import React from "react"
import { Link, useNavigate } from "react-router-dom"
import style from "./MyProfile.module.css"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../../redux/userSlice"

export default function MyProfile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // me traigo el user del estado global
  const user = useSelector((state) => state.user.user)
  console.log(user) // control

  function handleLogout() {
    dispatch(logoutUser())
    navigate("/")
  }

  return (
    <div>
      <div>
        {!user ? (
          <div className={style.profileContainer}>
            {/*!!! mostra esto si no esta logueado */}
            <h1>No estas logueado!!</h1>
            <Link to='/login'>Logueate acá</Link>
            <h1>Todavia no tenes una cuenta? </h1>
            <Link to='/register'>Registrate acá</Link>
          </div>
        ) : (
          //! si el usuario esta registrado, mostrar el perfil
          <div className={style.profileContainer}>
            <h1>Mi Perfil</h1>
            <h3>Nombre : {user.name} </h3>
            <h3>Email : {user.email}</h3>

            <Link to='/myappointments'>Aquí podras ver tus reservas</Link>
            <p>O</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        )}
      </div>
    </div>
  )
}
