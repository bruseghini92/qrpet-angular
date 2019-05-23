export class signUpModel {
    name: String;
    username: String;
    password: String;
    email:String;

    public constructor(init?: Partial<signUpModel>) {
        Object.assign(this, init);
    }
}