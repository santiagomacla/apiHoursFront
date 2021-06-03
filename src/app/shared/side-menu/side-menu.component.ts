import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
      .spacer {
        flex: 1 1 auto;
      }
      button {
        height: 40px;
      }
    `,
  ],
})
export class SideMenuComponent implements OnInit {
  title: string = 'Crear Reporte';

  constructor() {}

  ngOnInit(): void {}

  stitle(text: string) {
    this.title = text;
  }
}
