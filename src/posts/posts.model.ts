import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface PostsCreationAttrs {
    title: string
    content: string
    userId: number
    image: string
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostsCreationAttrs>{

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'Самый лучший заголовок', description: 'Заголовок поста'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string

    @ApiProperty({example: 'Жили у бабуси, барсуки и гуси ...', description: 'Контентная часть поста'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string

    @ApiProperty({example: '/src/img/new.svg', description: 'Изображение для поста'})
    @Column({type: DataType.STRING, defaultValue: false})
    image: string

    @ApiProperty({example: 12, description: 'ID автора поста'})
    @ForeignKey(()=>User)
    @Column({type: DataType.INTEGER})
    userId: number

    @BelongsTo(()=>User)
    author: User

}