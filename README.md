# M3_Resto

## Description

App for a resto with appointments. Users can register, login set new appointments and delete existing ones.

**Link to demo:**   [YouTube demo video](https://www.youtube.com/watch?v=H-a1M9Y_PyQ)

## Configuration

### Backend

- with Terminal situated in the **back** folder, run `npm install`
- the `data-source.ts` file must be set up with your local database. I used a `envs.ts` file which recalls .env file with **DB_PASSWORD** variable
- a **PORT** file must also be configured. You can do this in the `index.ts` file
- run `npm run dev` to start the app.

### Frontend

- with Terminal situated in the **front** folder, run `npm install` 
- run `npm run dev` to start the app.

## Technologies

### Backend
 - Node.js
 - TypeScript
 - TypeORM
 - PostgreSQL

### Frontend
- Vite
- React
- Redux
- CSS Modules
- HTML