import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//// Componentes  ////

import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';

//// Angular Material  ////
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent, 
    FooterComponent,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
