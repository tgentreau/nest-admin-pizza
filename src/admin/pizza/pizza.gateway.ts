import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "http";
import { CreatePizzaDto } from "./dto/create-pizza.dto";

@WebSocketGateway()
export class PizzaGateway {
    @WebSocketServer() server: Server

    handleMessage(message: CreatePizzaDto) {
        this.server.emit('newPizza', message)
    }
}