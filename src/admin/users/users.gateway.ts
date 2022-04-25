import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "http";
import { CreateUserDto } from "./dto/create-user.dto";

@WebSocketGateway()
export class UserGateway {
    @WebSocketServer() server: Server

    handleMessage(message: CreateUserDto) {
        this.server.emit('newUser', message)
    }
}