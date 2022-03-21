import { Component, OnInit } from '@angular/core';
import {Videojuego} from 'src/app/entidades/videojuegos';

@Component({
  selector: 'app-lista-videojuegos',
  templateUrl: './lista-videojuegos.component.html',
  styleUrls: ['./lista-videojuegos.component.css']
})
export class ListaVideojuegosComponent implements OnInit {

  listaVideojuegos : Videojuego[] = []
  videojuego : Videojuego | null = null

  
  insertarDeshabilitado = false
  modificarBorrarDeshabilitado = true


  tituloObligatorioOculto = true
  companyObligatorioOculto = true
  valoracionObligatorioOculto = true

  // Los videojuegos tendran un identificador, un titulo, una compañia y una valoración media.
  id: number = 0
  titulo: string = ""
  company: string = ""
  valMedia: number = 0

  constructor() {
    let videojuego : Videojuego = new Videojuego("Mario Kart", "Nintendo", 5)
    this.listaVideojuegos.push(videojuego);
   }

   
    public insertar(){
      if(!this.hayErroresEnFormulario()){
        this.videojuego = new Videojuego(this.titulo, this.company, this.valMedia)
        console.log(`Insertando Videojuego: ${this.videojuego.toString()}`)
        this.listaVideojuegos.push(this.videojuego)
        this.vaciar()
        console.log("Videojuego insertado!")
      }    
    }
  
    
    public hayErroresEnFormulario():boolean{
      let error : boolean = false
      this.tituloObligatorioOculto = true
      this.companyObligatorioOculto = true
      this.valoracionObligatorioOculto = true
  
      if(this.titulo.trim().length==0){
        this.tituloObligatorioOculto = false
        error = true
      }
      
      if(this.company.trim().length==0){
        this.companyObligatorioOculto = false
        error = true
      }
      
      if(this.valMedia.toLocaleString().trim().length==0){
        this.valoracionObligatorioOculto = false
        error = true
      }
      return error
    }
  
    
    public modificar(){    
      if(!this.hayErroresEnFormulario()){
        for(let a=0; a<this.listaVideojuegos.length; a++){
          let juegoaux : Videojuego = this.listaVideojuegos[a]
          if(juegoaux.id == this.id){
            this.listaVideojuegos[a].titulo = this.titulo
            this.listaVideojuegos[a].company = this.company
            this.listaVideojuegos[a].valoracion = this.valMedia
            break
          }
        }
        console.log("Modificando... " + this.videojuego?.toString())
        this.vaciar()
      }
    }
  

    public borrar(){    
      for(let a=0; a<this.listaVideojuegos.length; a++){
        if( this.listaVideojuegos[a].id == this.id){
          this.listaVideojuegos.splice(a,1)
          break;
        }
      }
      this.vaciar()
      console.log("Borrando... " + this.id)
    }
  
    
    public vaciar(){
      console.log("Vaciando...")     
      this.id = 0
      this.titulo = ""
      this.company = ""
      this.valMedia = 0
  
      this.insertarDeshabilitado = false
      this.modificarBorrarDeshabilitado = true
  
      this.ocultarMensajesError()
    }
    
    
    public seleccionar(videojuego : Videojuego) : void{
      console.log("Seleccionando...")
      this.ocultarMensajesError()
  
      this.id = videojuego.id
      this.titulo = videojuego.titulo
      this.company = videojuego.company
      this.valMedia = videojuego.valoracion
  
      this.insertarDeshabilitado = true
      this.modificarBorrarDeshabilitado = false
    }
  
    
    public ocultarMensajesError(){
      this.tituloObligatorioOculto = true
      this.companyObligatorioOculto = true
      this.valoracionObligatorioOculto = true
    } 
  
    ngOnInit() {
  
    }
}
