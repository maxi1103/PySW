import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto1FormComponent } from './components/punto1-form/punto1-form.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto2FormComponent } from './components/punto2-form/punto2-form.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto3FormComponent } from './components/punto3-form/punto3-form.component';
import { NuevoComponent } from './componets/nuevo/nuevo.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Punto1Component,
    Punto1FormComponent,
    Punto2Component,
    Punto2FormComponent,
    Punto3Component,
    Punto3FormComponent,
    NuevoComponent,
  ],
  imports: [
    AlifeFileToBase64Module,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
