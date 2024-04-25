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
exports.loginUserController = exports.getUserByIdController = exports.getUserController = exports.createUserController = void 0;
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(201).send("Se crea un Usuarios");
});
exports.createUserController = createUserController;
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("Lista de usuarios");
});
exports.getUserController = getUserController;
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("se obtiene un solp usuario");
});
exports.getUserByIdController = getUserByIdController;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("login del usuario");
});
exports.loginUserController = loginUserController;
