import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValuesComponent } from './Values/Values.component';

const routes: Routes = [
  { path: 'values', component: ValuesComponent },
  { path: '',   redirectTo: '/values', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
