import { CART } from "src/constatnts";
import { CartEntity } from "./entities/cart.entity";

export const CartProviders = [
    {
        provide: CART,
        useValue: CartEntity,
    },
];