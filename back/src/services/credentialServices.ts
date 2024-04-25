// import { QueryRunner } from "typeorm"
import { ICredentialDto } from "../dtos/credentialDto"
import { Credential } from "../entities/CredentialEntity"
import { CredentialRepository } from "../repositories/CredentialRepository"

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.
export const createCredentialsService = async (credentialsDto: ICredentialDto): Promise<number> => {
  const newCredential: Credential = CredentialRepository.create(credentialsDto)
  await CredentialRepository.save(newCredential)

  return newCredential.id
}
// export const createCredentialsService = async (credentialsDto: ICredentialDto, queryRunner?: QueryRunner): Promise<number> => {
//   let newCredential: Credential

//   if (queryRunner) {
//     // Si se proporciona un queryRunner, utilizamos saveCredentialsWithQueryRunner
//     newCredential = await saveCredentialsWithQueryRunner(credentialsDto, queryRunner)
//   } else {
//     // Si no se proporciona un queryRunner, utilizamos saveCredentials
//     newCredential = await saveCredentials(credentialsDto)
//   }

//   // Retornamos el ID del nuevo credencial
//   return newCredential.id
// }

// const saveCredentials = async (credentialsDto: ICredentialDto): Promise<Credential> => {
//   const newCredential: Credential = CredentialRepository.create(credentialsDto)
//   await CredentialRepository.save(newCredential)
//   return newCredential
// }

// const saveCredentialsWithQueryRunner = async (credentialsDto: ICredentialDto, queryRunner: QueryRunner): Promise<Credential> => {
//   const newCredential: Credential = CredentialRepository.create(credentialsDto)
//   await queryRunner.manager.save(newCredential) // Utilizamos el queryRunner para guardar el nuevo credencial
//   return newCredential
// }

// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.
export const validateCredentials = async (credentialsDto: ICredentialDto): Promise<number | null> => {
  const { username, password } = credentialsDto
  const foundCredential: Credential | null = await CredentialRepository.findOneBy({ username })

  if (foundCredential && foundCredential.password === password) return foundCredential.id
  else throw Error("Usuario o contraseña inválido")
}
