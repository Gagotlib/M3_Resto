import React from "react"
import styles from "./Contact.module.css"

export default function Contact() {
  function handleOnSubmit() {
    alert("GRACIAS POR CONTACTARSE CON NOSOTROS \n EN BREVE LE RESPONDEREMOS")
  }

  return (
    <div className={styles.contactView}>
      <h1>Contactanos</h1>
      <form className={styles.contactForm} onSubmit={handleOnSubmit}>
        <div className={styles.labelInput}>
          <label htmlFor='nombre'> Nombre : </label>
          <input type='text' name='nombre' id='nombre' placeholder='Tu Nombre' required />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor='email'> Email : </label>
          <input type='email' name='email' id='email' placeholder='Tu Email' required />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor='consulta'> Consulta : </label>
          <textarea type='text' name='consulta' id='consulta' placeholder='Tu Consulta' required />
        </div>
        <div className={styles.labelInput}>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  )
}
