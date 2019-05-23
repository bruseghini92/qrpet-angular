import { Pet } from '../pet/pet';
import { Role } from '../role/role';

export class User {

    id: string;
    name: string;
    lastName: string;
    email: string;
    username: string;
    telephone: string;
    address: string;
    roles: Role[];
    state: string;
    city: string;
    country: string;
    password : string;

    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}