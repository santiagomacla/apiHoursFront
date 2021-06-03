import { Component, Input, OnInit } from '@angular/core';
import { Consulta } from '../../interface/consulta.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
    `
      table {
        width: 100%;
      }
    `,
  ],
})
export class TableComponent implements OnInit {
  @Input()
  data!: Consulta;

  displayedColumns: string[] = [
    'idTec',
    'normal',
    'night',
    'sunday',
    'exNor',
    'exNight',
    'exSunday',
  ];

  constructor() {}

  ngOnInit(): void {}
}
