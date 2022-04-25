import * as bcrypt from 'bcrypt'

export class Bcrypt {
    setPassword(password: string) {
        const salt = bcrypt.genSaltSync();
        return bcrypt.hashSync(password, salt);
    }

    comparePassword(password: string, hash: string) {
        return bcrypt.compareSync(password, hash)
    }
}