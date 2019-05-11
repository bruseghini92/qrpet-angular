export class Specie {

    id: string;
    name: string;

    public constructor(init?: Partial<Specie>) {
        Object.assign(this, init);
    }
}