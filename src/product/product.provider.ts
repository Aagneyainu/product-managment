import { PRODUCT } from "src/constatnts";
import { ProductEntity } from "./entities/product.entity";

export const ProductProviders = [
    {
        provide: PRODUCT,
        useValue: ProductEntity,
    },
];