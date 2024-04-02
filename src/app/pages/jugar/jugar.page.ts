import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.page.html',
  styleUrls: ['./jugar.page.scss'],
})
export class JugarPage implements OnInit {
  public id: number = 0
  public nivel: any = ''
  public opciones: any = [
    {id: 1, name: 'Fácil', opc: 7, color: 'primary'},
    {id: 2, name: 'Normal', opc: 5, color: 'warning'},
    {id: 3, name: 'Difícil', opc: 2, color: 'danger'},
  ]

  public numFilas: number[] = []

  public palabras: any[] = [
    'acaba', 'dabas', 'dados', 'dalia', 'damas', 'dante',
    'hacen', 'hacer', 'hacha', 'zorra', 'viaje', 'viche'
  ]
  public palabra: string = ''
  public letras: string[] = []
  constructor(
    public activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.params['id']
    this.nivel = this.opciones.find((item: any) => item.id == this.id)
    this.numFilas = Array(this.nivel.opc).fill(0).map((x,i)=>i);

    const rand = Math.ceil(Math.random()*this.palabras.length)
    this.palabra = this.palabras[rand]
    this.letras = this.palabra.split('')
    console.log(this.letras);
    
    return 0
  }

}
