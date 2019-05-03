import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VereinComponent } from './verein/verein.component';

const routes: Routes = [
  { path: 'verein', component: VereinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
