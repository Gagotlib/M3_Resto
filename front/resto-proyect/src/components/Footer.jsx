import styles from "./styles/Footer.module.css"
import instalogo from "../assets/imgs/instalogo.png"
import xlogo from "../assets/imgs/Xlogo.png"
import facebook from "../assets/imgs/facebook.png"
export default function Footer() {
  return (
    <>
    <div className={styles.footer}>
      <div>
        <a href="#"><img src={instalogo} alt="insta" /></a>
        <a href="#"><img src={xlogo} alt="x" /></a>
        <a href="#"><img src={facebook} alt="face" /></a>
      </div>
      <div>
        <p>Página de Gabriel Gotlib </p> 
      </div>
    </div>
    </>
  )
}
