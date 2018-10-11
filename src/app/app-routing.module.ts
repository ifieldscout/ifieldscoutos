import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CaseDetailComponent } from './case-detail/case-detail.component';

const routes: Routes = [
  {
    path: 'case/:caseid',
    component: CaseDetailComponent,
    data: {
      title: 'Case Details'
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
