


/**
 * @Author Sajina p k
 * @description Entity for product table
 */
import { Column, DataType, Length, Model, Table } from 'sequelize-typescript';


@Table({ tableName: 'product', timestamps: false })
export class ProductEntity extends Model {

    @Column({
        type: DataType.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        // allowNull: true,
    })
    id: number;

    @Length({ max: 100 })
    @Column({
        type: DataType.STRING,

        allowNull: true,
    })
    name: string;


    @Length({ max: 250 })
    @Column({
        type: DataType.STRING,

        allowNull: true,
    })
   description: string;

    @Length({ max: 20 })
    @Column({
        type: DataType.STRING,

        allowNull: true,
    })
    price: string;


    @Length({ max: 100 })
    @Column({
        type: DataType.STRING,

        allowNull: true,
    })
    image: string;

   
    @Length({ max: 100 })
    @Column({
        type: DataType.STRING,

        allowNull: true,
    })
    brand: string;

    
    @Column({
        type: DataType.SMALLINT,
        allowNull: true,
    })
    quantity: number;


}

