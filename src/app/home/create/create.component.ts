import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Report } from '../interface/report.interface';
import { CreateService } from '../services/create/create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    tecnic: [''],
    service: [''],
    fechI: [''],
    fechE: [''],
    hourI: [''],
    hourE: [''],
    tipoI: [''],
    tipoE: [''],
  });

  constructor(private fb: FormBuilder, private createService: CreateService) {}

  ngOnInit(): void {}

  save() {
    const dateI = this.miFormulario.controls.fechI.value;
    const dateE = this.miFormulario.controls.fechE.value;
    const dateInit = this.dateFormat(
      dateI._i.date,
      dateI._i.month,
      dateI._i.year
    );
    const datEnd = this.dateFormat(
      dateE._i.date,
      dateE._i.month,
      dateE._i.year
    );
    const report: Report = {
      idTecnic: this.miFormulario.controls.tecnic.value,
      idService: this.miFormulario.controls.service.value,
      fechaIn: dateInit,
      fechaFin: datEnd,
      hourIn: this.miFormulario.controls.hourI.value,
      hourFin: this.miFormulario.controls.hourE.value,
      tipoInit: this.miFormulario.controls.tipoI.value,
      tipoEnd: this.miFormulario.controls.tipoE.value,
    };

    this.createService.createReport(report).subscribe((resp) => {
      console.log(resp.report.message);
    });

    console.log(report);
  }

  dateFormat(day: number, month: number, year: number) {
    if (day < 10 && month < 10) {
      return '0' + day + '-0' + (month + 1) + '-' + year;
    }
    if (day < 10) {
      return '0' + day + '-' + (month + 1) + '-' + year;
    }
    if (month < 10) {
      return day + '-0' + (month + 1) + '-' + year;
    }

    return '';
  }
}
