import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-role.model";

interface UserCreationAttrs {
    email: string
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'user@email.com', description: 'Уникальный email, не может быть пустым'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @ApiProperty({example: 'Gdf;#$516g[Gls~gd', description: 'Пароль, не может быть пустым'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @ApiProperty({example: true, description: 'Статус бана, по умолчанию - нет'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean

    @ApiProperty({example: 'Оскорбление пользователей', description: 'Причина бана'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string


    @BelongsToMany(()=>Role, ()=>UserRoles)
    roles: Role[]
}