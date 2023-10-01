export class AnimalEstimacao {

    constructor(private _id:number = 0, private _nome:string = '', private _tipo:string = '', 
        private _dataNascimento:string = '', private _dono:string = '') {
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(tipo: string) {
        this._tipo = tipo;
    }
    
    get dataNascimento(): string {
        return this._dataNascimento;
    }
    
    set dataNascimento(dataNascimento: string) {
        this._dataNascimento = dataNascimento;
    }
    
    get dono(): string {
        return this._dono;
    }
    
    set dono(dono: string) {
        this._dono = dono;
    }
}