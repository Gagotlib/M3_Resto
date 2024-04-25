/* eslint-disable react/prop-types */
import style from "./styles/DishCard.module.css"

export default function DishCard({ plato, imgSrc }) {
  return (
    <div className={style.dishCard}>
      <h3>{plato}</h3>
      <img src={imgSrc} alt='pizza' />
    </div>
  )
}
