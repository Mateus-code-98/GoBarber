"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var agendamentosRouter = express_1.Router();
var agendamentos = [];
agendamentosRouter.get('/', function (request, response) {
    console.log(request.query);
    console.log(request.body);
    console.log(request.body);
    return response.json({ message: "Desgrça" });
});
exports.default = agendamentosRouter;
