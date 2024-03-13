

/**
 * @Author Sajina p k
 * @description Entity for user table
 */
import { Column, DataType, Length, Model, Table } from 'sequelize-typescript';


@Table({ tableName: 'user', timestamps: false })
export class UserEntity extends Model {

    @Column({
        type: DataType.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        // allowNull: true,
    })
    id: number;

    @Length({ max: 20 })
    @Column({
        type: DataType.STRING,

        allowNull: true,
    })
    name: string;


    @Length({ max: 20 })
    @Column({
        type: DataType.STRING,

        allowNull: true,
    })
    username: string;

    @Length({ max: 20 })
    @Column({
        type: DataType.STRING,

        allowNull: true,
    })
    password: string;


    @Length({ max: 100 })
    @Column({
        type: DataType.STRING,

        allowNull: true,
    })
    address: string;

    @Column({
        type: DataType.SMALLINT,
        allowNull: true,
    })
    mobile: number;

    @Length({ max: 10 })
    @Column({
        type: DataType.STRING,

        allowNull: true,
    })
    gender: string;

    @Length({ max: 20 })
    @Column({
        type: DataType.STRING,

        allowNull: true,
    })
    nationality: string;

    @Column({
        type: DataType.SMALLINT,
        allowNull: true,
    })
    token: number;


}

