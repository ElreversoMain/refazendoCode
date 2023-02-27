export class Buyer{
    constructor(
        private id:string,
        private Name:string,
        private Email:string,
        private CPF:string

    ){
        this.id=id
        this.Name=Name
        this.Email=Email
        this.CPF=CPF
    }
    public getId(){
        return this.id
    }
    public getName(){
        return this.Name
    }
    public getEmail(){
        return this.Email
    }
    public getCPF(){
        return this.CPF
    }
}