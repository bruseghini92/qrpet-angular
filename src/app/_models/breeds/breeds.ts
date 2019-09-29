import { SpecieComponent } from '../species/species.component';

export class Breed {

    id: string;
    name: string;
    specie: SpecieComponent;

    public constructor(init?: Partial<Breed>) {
        Object.assign(this, init);
    }
}