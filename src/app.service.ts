import { Injectable, Redirect } from '@nestjs/common';

@Injectable()
export class AppService {
    redirect() {
        return "redirection.."
    }
    logout() {
        
    }
}
