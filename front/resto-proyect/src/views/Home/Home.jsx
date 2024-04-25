import style from "../Home/Home.module.css"
import { Link } from "react-router-dom"
import pepizza from "../../assets/imgs/pepperonipizza.jpg"
import DishCard from "../../components/DishCard"
import burger from "../../assets/imgs/burger.jpg"
import margerita from "../../assets/imgs/margerita.jpeg"
import mojito from "../../assets/imgs/mojito.jpg"

export default function Home() {
  return (
    <>
      <div className={style.bodyhome}>
        <div className={style.intro}>
          <h6 className={style.subtitle}>Bienvenido a </h6>
          <h5 className={style.title}>Palmeras Pizza</h5>
        </div>
        <div className={style.content}>
          <div className={style.user}>
            <h3>Queres hacer una reserva ?</h3>
            <Link to='/login'>Logueate acá</Link>
          </div>
          <div className={style.user}>
            <h3>Todavía no sos usuario ?</h3>
            <Link to='/register'>Registrate acá</Link>
          </div>
        </div>
        <div>
          <h2 className={style.quienessomostitulo}>Quienes somos</h2>
          <div className={style.quienessomos}>
            <p>
              ¡Bienvenido a Palmeras Pizza! Con más de 20 años de historia a orillas del lago, somos una pizzería familiar especializada en auténtica pizza artesanal y cócteles ingeniosos. En
              Palmeras, cada visita es una experiencia memorable, donde la excelencia culinaria se combina con un servicio personalizado y una cálida hospitalidad. Únete a nosotros en nuestro acogedor
              rincón junto al lago y descubre la alegría de buena comida, buena compañía y buenos momentos.
            </p>
          </div>
          <div className={style.maspedidos}>
            <h2 className={style.quienessomostitulo}>Los mas pedidos </h2>
            <div className={style.cardsContainer}>
              <DishCard plato={"Pizza Pepperonni"} imgSrc={pepizza}></DishCard>
              <DishCard plato={"Pizza Margarita"} imgSrc={margerita}></DishCard>
              <DishCard plato={"Burger con papas"} imgSrc={burger}></DishCard>
              <DishCard plato={"Mojito"} imgSrc={mojito}></DishCard>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
