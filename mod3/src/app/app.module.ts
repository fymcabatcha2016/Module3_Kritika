import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipeComponent,
    ShoppinglistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
