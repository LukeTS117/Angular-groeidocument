export class owed{
    payer!: string;
    amount!: number;
    reciever!: string;

    constructor(payer: string, amount: number, reciever:string){
        this.payer = payer;
        this.amount = amount;
        this.reciever = reciever;
    }
}