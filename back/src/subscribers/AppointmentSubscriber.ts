import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm"
import { Appointment } from "../entities/AppointmentEntity"

@EventSubscriber()
export class AppointmentSubscriber implements EntitySubscriberInterface<Appointment> {
  listenTo() {
    return Appointment
  }

  afterInsert(event: InsertEvent<Appointment>) {
    console.log("Appointment creado", event.entity)
    //logica del envio del mail al usuario
  }
}
