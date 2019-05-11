import { UserComponent } from '../user/user.component';
import { SpecieComponent } from '../species/species.component';
import { RaceComponent } from '../races/races.component';
import { Specie } from '../species/species';
import { Race } from '../races/races';

export class Pet {

    id: string;
    name: string;
    user: UserComponent;
    castration: boolean;
    mating: boolean;
    adoptable: boolean;
    lost: boolean;
    birthdate: Date;
    species: Specie;
    races: Race;

    public constructor(init?: Partial<Pet>) {
        Object.assign(this, init);
    }
}