
export class Payment{
    constructor(
        private id:string,
        private Amount:string,
        private Type:string,
        private Card:string

    ){
        this.id=id
        this.Amount=Amount
        this.Type=Type
        this.Card=Card
    }
    public GetId(){
        return this.id
    }
    public GetAmount(){
        return this.Amount
    }
    public GetType(){
        return this.Type
    }
    public GetCard(){
        return this.Card
    }
}