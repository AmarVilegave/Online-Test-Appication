import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { TestPageComponent } from './Components/test-page/test-page.component';
import { ResultPageComponent } from './Components/result-page/result-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'home', component:HomePageComponent},
  {path:'test/:email', component:TestPageComponent},
  { path: 'result/:c/:w', component: ResultPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
