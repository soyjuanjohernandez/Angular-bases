import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['spiderman', 'ironman',' hulk', 'batman'];
  borrado: string = ''




  borrarHeroe(): string{
   this.borrado = this.heroes.shift() || '';
    return this.borrado;
  }



}
