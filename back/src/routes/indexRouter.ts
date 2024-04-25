import { Router } from "express"
import usersRoute from "./usersRouter"
import appointmentRouter from "./appointmentsRouter"

const indexRouter: Router = Router()

indexRouter.use("/users", usersRoute)
indexRouter.use("/appointments", appointmentRouter)

export default indexRouter
