import { UserComponent } from '../user/user.component';
import { SpecieComponent } from '../species/species';
import { RaceComponent } from '../races/races';

export class Pet {

    id: string;
    name: string;
    user: UserComponent;
    castration: boolean;
    lost: boolean;
    birthdate: Date;
    species: SpecieComponent;
    races: RaceComponent;

    public constructor(init?: Partial<Pet>) {
        Object.assign(this, init);
    }
}