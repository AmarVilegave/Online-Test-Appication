import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HeaderComponent } from './Components/header/header.component';
import { InstructionsComponent } from './Components/instructions/instructions.component';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { TestPageComponent } from './Components/test-page/test-page.component';
import { QuestionsComponent } from './Components/questions/questions.component';
import { OptionsComponent } from './Components/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    InstructionsComponent,
    UserInfoComponent,
    TestPageComponent,
    QuestionsComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
