import { DataSource } from "typeorm"
import { User } from "../entities/UserEntity"
import { Credential } from "../entities/CredentialEntity"
import { Appointment } from "../entities/AppointmentEntity"
import { DB_PASSWORD } from "./envs"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: DB_PASSWORD,
  database: "proyectom3",
  // dropSchema: true, //reinica la bd al arrancar el servidor.
  synchronize: true,
  logging: false,
  entities: [User, Credential, Appointment],
  subscribers: [],
  migrations: [],
})
export const UserModel = AppDataSource.getRepository(User)
export const CredentialModel = AppDataSource.getRepository(Credential)
export const AppointmentModel = AppDataSource.getRepository(Appointment)
