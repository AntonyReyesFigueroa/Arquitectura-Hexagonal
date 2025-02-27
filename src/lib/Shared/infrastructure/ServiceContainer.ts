
import { InMemoryUserRepository } from '../../user/infrastructure/InMemoryUserRepository';
import { UserCreate } from "../../user/application/UserCreate/UserCreate";
import { UserDelete } from "../../user/application/UserDelete/UserDelete";
import { UserEdit } from "../../user/application/UserEdit/UserEdit";
import { UserGetAll } from "../../user/application/UserGetAll/UserGetAll";
import { UserGetOneById } from "../../user/application/UserGetOneById/UserGetOneById";

// import { PostgresUserRepository } from "../../user/infrastructure/PostgresUserRepository";

//Todos piden user repository de memoria
const userRepository = new InMemoryUserRepository();

//Todos piden user repository de postgress
// const userRepository = new PostgresUserRepository('url');

export const ServiceContainer = {
    user: {
        getAll: new UserGetAll(userRepository),
        getOneById: new UserGetOneById(userRepository),
        create: new UserCreate(userRepository),
        edit: new UserEdit(userRepository),
        delete: new UserDelete(userRepository),
    },
};
