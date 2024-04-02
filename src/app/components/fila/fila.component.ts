import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.scss'],
})
export class FilaComponent  implements OnInit {
  @Input() palabra!: string
  @Input() letras!: string[]
  constructor() { }

  ngOnInit() {

    return 0
  }

}
