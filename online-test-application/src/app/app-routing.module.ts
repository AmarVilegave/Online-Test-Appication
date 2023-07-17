import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { TestPageComponent } from './Components/test-page/test-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'test/:email', component:TestPageComponent},
  {path:'test', component:TestPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
