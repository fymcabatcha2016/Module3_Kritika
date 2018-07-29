import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecepieListComponent } from './receipe/recepie-list/recepie-list.component';
import { RecepieDetailComponent } from './receipe/recepie-detail/recepie-detail.component';
import { RecepieItemComponent } from './receipe/recepie-list/recepie-item/recepie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipeComponent,
    ShoppinglistComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    RecepieItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
