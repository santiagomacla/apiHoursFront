import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consulta } from '../interface/consulta.interface';
import { ConsultService } from '../services/consult/consult.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css'],
})
export class ConsultComponent implements OnInit {
  consultForm: FormGroup = this.fb.group({
    tecnic: ['', [Validators.required]],
    sem: [1, [Validators.required, Validators.min(1)]],
  });

  data!: Consulta;

  constructor(private fb: FormBuilder, private consultS: ConsultService) {}

  ngOnInit(): void {}

  validarCampo(campo: string) {
    return (
      this.consultForm.controls[campo].errors &&
      this.consultForm.controls[campo].touched
    );
  }

  consultar() {
    if (this.consultForm.invalid) {
      this.consultForm.markAllAsTouched();
      return;
    }
    const id = this.consultForm.controls.tecnic.value;
    const sem = this.consultForm.controls.sem.value;
    this.consultS.getData(id, sem).subscribe((resp) => {
      this.data = resp;
      console.log(this.data);
    });
  }
}
