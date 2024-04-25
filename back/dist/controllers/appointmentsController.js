"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentController = exports.addAppointmentController = exports.getAppointmentsByIdController = exports.getAppointmentsController = void 0;
const getAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("Lista de appointments");
});
exports.getAppointmentsController = getAppointmentsController;
const getAppointmentsByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("Appointments segun Id");
});
exports.getAppointmentsByIdController = getAppointmentsByIdController;
const addAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(201).send("Appointment Agendado");
});
exports.addAppointmentController = addAppointmentController;
const cancelAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("Appointment Cancelado");
});
exports.cancelAppointmentController = cancelAppointmentController;
