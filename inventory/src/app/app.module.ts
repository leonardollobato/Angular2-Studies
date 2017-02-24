import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InventoryComponent, 
  ProductListComponent, 
  ProductRowComponent, 
  ProductImageComponent, 
  ProductDepartmentComponent,
  PriceDisplayComponent } from './app.component';

@NgModule({
  declarations: [
    InventoryComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InventoryComponent]
})
export class AppModule { }
