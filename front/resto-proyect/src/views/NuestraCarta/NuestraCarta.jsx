import React from "react"
import styles from "./NuestraCarta.module.css"

export default function NuestraCarta() {
  return (
    <div className={styles.nuestracartaview}>
      <div>
        <h1>Nuestra Carta</h1>
        <h2>Entradas</h2>
        <ul>
          <li>Bruschetta de Tomate y Albahaca</li>
          <li>Palitos de Mozzarella Fritos con Salsa de Tomate</li>
          <li>Calamares Fritos con Alioli de Ajo Asado</li>
          <li>Ensalada Caprese con Mozzarella de Búfala y Tomates Frescos</li>
          <li>Carpaccio de Res con Rúcula, Parmesano y Vinagreta de Limón</li>
        </ul>

        <h2>Pizzas</h2>
        <ul>
          <li>Pizza Margherita</li>
          <li>Pizza Pepperoni</li>
          <li>Pizza Vegetariana (pimientos, cebollas, champiñones)</li>
          <li>Pizza Hawaiiana (jamón, piña, salsa de tomate, mozzarella)</li>
          <li>Pizza BBQ de Pollo y Cebolla</li>
          <li>Pizza de Queso de Cabra y Espinacas (vegetariana)</li>
          <li>Pizza de Berenjena Asada y Pimientos (vegetariana)</li>
          <li>Pizza Mediterránea (aceitunas, tomates secos, albahaca fresca)</li>
          <li>Pizza de Salmón Ahumado con Queso Crema y Cebollas Rojas</li>
          <li>Pizza de Pollo Teriyaki con Sésamo y Cebollín</li>
        </ul>

        <h2>Platos de Pastas</h2>
        <ul>
          <li>Spaghetti Carbonara</li>
          <li>Linguine con Gambas al Ajillo</li>
          <li>Penne Arrabbiata</li>
          <li>Fettuccine Alfredo con Pollo</li>
          <li>Lasagna de Carne Casera</li>
        </ul>

        <h2>Platos Veganos</h2>
        <ul>
          <li>Risotto de Champiñones y Espárragos</li>
          <li>Curry de Garbanzos con Coco y Espinacas</li>
          <li>Tacos Veganos de Jackfruit con Guacamole</li>
          <li>Enchiladas de Frijoles Negros y Verduras</li>
          <li>Pimiento Relleno de Quinoa y Verduras</li>
        </ul>

        <h2>Platos sin TACC</h2>
        <ul>
          <li>Risotto de Espárragos y Tomates Secos</li>
          <li>Fideos de Arroz Salteados con Verduras al Wok</li>
          <li>Pizza sin TACC de Mozzarella, Tomate y Albahaca</li>
        </ul>

        <h2>Postres</h2>
        <ul>
          <li>Tiramisú Casero</li>
          <li>Cheesecake de Frutos Rojos</li>
          <li>Profiteroles Rellenos de Crema de Vainilla y Bañados en Chocolate</li>
          <li>Helado Artesanal de Dulce de Leche</li>
          <li>Tarta de Manzana con Helado de Vainilla</li>
        </ul>

        <h2>Selección de Cervezas</h2>
        <ul>
          <li>Pale Ale</li>
          <li>IPA</li>
          <li>Lager</li>
          <li>Stout</li>
          <li>Witbier</li>
        </ul>

        <h2>Selección de Vinos</h2>
        <ul>
          <li>Malbec (tinto)</li>
          <li>Chardonnay (blanco)</li>
          <li>Merlot (tinto)</li>
          <li>Sauvignon Blanc (blanco)</li>
          <li>Cabernet Sauvignon (tinto)</li>
        </ul>
      </div>
    </div>
  )
}
