import { Sequelize } from "sequelize-typescript"
import { CartProviders } from "src/cart/cart.provider"
import { CartEntity } from "src/cart/entities/cart.entity"
import { ProductEntity } from "src/product/entities/product.entity"
import { UserEntity } from "src/user/entities/user.entity"



export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            
            
        const sequelize=new Sequelize({

            dialect:'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'productdb',
            // timezone:'Asia/kolkata',
            dialectOptions:{
                timezone:'local'
            }
        })
    sequelize.addModels([UserEntity,ProductEntity,CartEntity])

    return sequelize
    }
    }]