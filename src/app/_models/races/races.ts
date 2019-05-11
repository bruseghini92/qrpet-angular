export class Race {

    id: string;
    name: string;

    public constructor(init?: Partial<Race>) {
        Object.assign(this, init);
    }
}