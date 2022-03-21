export class Videojuego{

    private _id : number = 0;

    private static contadorId : number = 1;

    constructor(public titulo : string, public company : string, public valoracion : number){
        this._id = Videojuego.contadorId++;
        this.titulo = titulo
        this.company = company
        this.valoracion = valoracion
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
        return `Id: ${this._id}, Titulo: ${this.titulo}, Compania: ${this.company}, Valoracion media: ${this.valoracion}`
    }


}