import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CreateComponent } from './create/create.component';
import { ConsultComponent } from './consult/consult.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [CreateComponent, ConsultComponent, HomeComponent, TableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
