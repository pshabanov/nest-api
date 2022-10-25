import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
    }


    @ApiOperation({summary:'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.userService.createUser(userDto)
    }

    @ApiOperation({summary:'Получение списка пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get()
    getUsers(){
        return this.userService.getAllUsers()
    }
}
