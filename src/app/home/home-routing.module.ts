import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './consult/consult.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'create', component: CreateComponent },
      { path: 'consult', component: ConsultComponent },
      { path: '**', redirectTo: 'create' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
