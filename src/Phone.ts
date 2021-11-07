export class Phone {
    private _number:string;
    
    constructor(number:string) {
        this._number = number;
    }

    get number(): string {
        return this._number;
    }

  

}