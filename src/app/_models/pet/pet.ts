import { UserComponent } from '../user/user.component';
import { Breed } from '../breeds/breeds';

export class Pet {

    id: string;
    name: string;
    user: UserComponent;
    castration: boolean;
    mating: boolean;
    adoptable: boolean;
    lost: boolean;
    birthdate: Date;
    //species: Specie;
    breeds: Breed;
    profilePic: any;
    qrFile: string;

    public constructor(init?: Partial<Pet>) {
        Object.assign(this, init);
    }
}