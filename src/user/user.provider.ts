import { USER } from "src/constatnts";
import { UserEntity } from "./entities/user.entity";

export const UserProviders = [
    {
        provide: USER,
        useValue: UserEntity,
    },
];