export class Card{
    constructor(
        private id:string,
        private holderName:string,
        private number:string,
        private expiration:string,
        private cvv:string

    ){
        this.id=id
        this.holderName=holderName
        this.number=number
        this.expiration=expiration
        this.cvv=cvv
    }
    public getID(){
        return this.id
    }
    public getHolderName(){
        return this.holderName
    }

    public getNumber(){
        return this.number
    }
    public getExpiration(){
        return this.expiration
    }
    public getCvv(){
        return this.cvv
    }
}