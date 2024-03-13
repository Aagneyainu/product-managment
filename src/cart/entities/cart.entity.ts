



/**
 * @Author Sajina p k
 * @description Entity for cart table
 */
import { Column, DataType, Length, Model, Table } from 'sequelize-typescript';


@Table({ tableName: 'cart', timestamps: false })
export class CartEntity extends Model {

    @Column({
        type: DataType.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        // allowNull: true,
    })
    id: number;

   
    
    @Column({
        type: DataType.SMALLINT,
        allowNull: true,
    })
    user_id: number;

     
    @Column({
        type: DataType.SMALLINT,
        allowNull: true,
    })
   product_id: number;

   @Column({
    type: DataType.SMALLINT,
    allowNull: true,
})
quantity: number;

@Column({
    type: DataType.SMALLINT,
    allowNull: true,
})
price: number;



}

