import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "http";
import { CreateIngredientDto } from "./dto/create-ingredient.dto";

@WebSocketGateway()
export class IngredientGateway {
    @WebSocketServer() server: Server

    handleMessage(message: CreateIngredientDto) {
        this.server.emit('newIngredient', message)
    }
}