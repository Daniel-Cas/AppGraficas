import { Component, OnInit } from '@angular/core';


interface MenuItem{
  ruta : string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
    

  ]
})
export class MenuComponent   {

  menu: MenuItem[] = [
    {ruta: '/grafica/barras', texto: 'Barras'},
    {ruta: '/grafica/barras-doble', texto: 'Barras Dobles'},
    {ruta: '/grafica/dona', texto: 'Dona'},
    {ruta: '/grafica/dona-http', texto: 'Dona Http'}
  ]

  

}
