import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";

export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {

    }

    async createUser (dto: CreateUserDto){
        return await this.userRepository.create(dto)
    }

    async getAllUsers(){
        return await this.userRepository.findAll()
    }
}
