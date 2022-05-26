import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';

import { Route, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';


const routes: Route[] =[
  {path: '', component: AppComponent},
    {path: 'home', component: HomeComponent},
  {path: 'form', component: HomeComponent},
  {path: 'form/:id', component: HomeComponent}, //Si paso otro dato que no sea id, lo cambió. Y también lo cambió en el constructor en forms.component.ts
  {path: 'casa', component: AppComponent},
  {path: 'ap', component: AppComponent},
  {path: 'ap/:id', component: AppComponent},

]; //Arreglo de rutas

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    AppComponent,    
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
