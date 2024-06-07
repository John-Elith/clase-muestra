import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.page.html',
  styleUrls: ['./jugar.page.scss'],
})
export class JugarPage implements OnInit {

  contador: number = 0;
  public id: number = 0
  public nivel: any = ''
  public opciones: any = [
    {id: 1, name: 'Fácil', opc: 7, color: 'primary'},
    {id: 2, name: 'Normal', opc: 5, color: 'warning'},
    {id: 3, name: 'Difícil', opc: 2, color: 'danger'},
  ]

  public numFilas: number[] = []

  public palabras: any[] = []
  public palabra: string= ''
  public letras: string[] = []

  constructor(
    public activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
  this.id = this.activatedRoute.snapshot.params['id']  
  this.nivel = this.opciones.find((item: any) => item.id == this.id)
  this.numFilas = Array(this.nivel.opc).fill(0).map((x,i) => i);
  const options = {
    url: 'http://127.0.0.1:8000/api/palabras',
  };

  const response: HttpResponse = await CapacitorHttp.get(options);
  console.log(response.data);
  
  for (let i = 0; i < response.data.length; i++) {
    this.palabras.push(response.data[i].palabra);
  }
    
  

  // response.data.array.forEach((item: any) => {
  //   console.log(item.palabra);
    
  //   this.palabras.push(item.palabra)
  // });

  const rand = Math.floor(Math.random()*this.palabras.length)
  this.palabra = this.palabras[rand]  
  
  this.letras = this.palabra.split('')
  console.log(this.letras);
  
  const contador = interval(1000);

  contador.subscribe((n) => {
    this.contador = n;
    // console.log(`${n}`);
    
  });

  return 0

  }




}
