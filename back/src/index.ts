import server from "./server"
import { PORT } from "./config/envs"
import "reflect-metadata"
import { AppDataSource } from "./config/data-source"

AppDataSource.initialize().then(() => {
  console.log("Conexion a BDD con exito")
  server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
  })
})
