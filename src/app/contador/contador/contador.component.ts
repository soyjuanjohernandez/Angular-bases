import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`

        <h1>{{(title == 'Contador App') ? title : 'Title default'}}</h1>

        <h3>la base es <strong>{{base}}</strong></h3>

        <button (click)=" acum(base)">+{{base}}</button>
        <span> {{ number }} </span>
        <button (click)=" acum(-base)">-{{base}}</button>

    `
})

export class ContadorComponent {

    title: string = 'Contador App';
    number: number = 0;
    base: number = 3;
    
    acum( value: number ) {
      this.number = this.number + value
      console.log('suma + 1', this.number );
    }

}