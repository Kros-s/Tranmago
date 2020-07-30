import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule ],
  declarations: [ AppComponent, HeaderComponent, CarouselComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
