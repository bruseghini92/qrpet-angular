import { Breed } from '../breeds/breeds';

export class Specie {

    id: string;
    name: string;
    breeds: Breed[];

    public constructor(init?: Partial<Specie>) {
        Object.assign(this, init);
    }
}