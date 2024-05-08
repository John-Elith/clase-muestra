import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

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

  public palabras: any[] = []
  public palabra: string = ''
  public letras: string[] = []
  constructor(
    public activedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.id = this.activedRoute.snapshot.params['id']
    this.nivel = this.opciones.find((item: any) => item.id == this.id)
    this.numFilas = Array(this.nivel.opc).fill(0).map((x,i)=>i);
    const options = {
      url: 'http://127.0.0.1:8000/api/palabras',
    };
  
    const response: HttpResponse = await CapacitorHttp.get(options);
    response.data.forEach((item: any) => {
      this.palabras.push(item.palabra)
    });
        
    const rand = Math.floor(Math.random()*this.palabras.length)
    this.palabra = this.palabras[rand]
    this.letras = this.palabra.split('')
    console.log(this.letras);
    
    return 0
  }

}
