import styles from "./styles/NavBar.module.css"
import instalogo from "../assets/imgs/instalogo.png"
import xlogo from "../assets/imgs/Xlogo.png"
import facebook from "../assets/imgs/facebook.png"
import { Link } from "react-router-dom"
import usericon from "../assets/imgs/usericon2.jpg"
import { useSelector } from "react-redux"

export default function NavBar() {
  //me traigo el user del estado global
  const user = useSelector(state => state.user.user)
  console.log(user)  // control

  return (
    <>
    <nav className={styles.navBar}>
      {
       //!!MOSTRAR ESTO SI EL USUARIO NO INICIO SESION */}
        !user ? 
        (
        <ul className={styles.navBarList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nuestracarta">Nuestra Carta</Link></li>
          <li><Link to="/login">Iniciar sesión</Link></li>
          <li><Link to="/register">Registrarse</Link></li>
          <li><Link to="/contact">Contacto</Link></li>        
        </ul>
        ) 
        :
        (

       //? MOSTRAR ESTO SI YA INICIO SESION */}
        <ul className={styles.navBarList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nuestracarta">Nuestra Carta</Link></li>
          <li><Link to="/myappointments">Mis reservas</Link></li>
          <li><Link to="/contact">Contacto</Link></li>             
        </ul>

        )
      }

      <div className={styles.socials}>
        <div>
          <Link to="/profile"><img className={styles.logoimg} src={usericon} alt="usericon" /> </Link>
          <span>mi perfil</span>
        </div>
        <a href="#"><img src={instalogo} alt="insta" /></a>
        <a href="#"><img src={xlogo} alt="x" /></a>
        <a href="#"><img src={facebook} alt="face" /></a>
      </div>
    </nav>
    </>
  )
}
