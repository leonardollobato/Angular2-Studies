import { Component, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector:'products-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `
    <div class="ui items">
      <product-row 
        *ngFor="let myProduct of productList"
        [product]="myProduct"
        (click)="clicked(myProduct)"
        [class.selected]="isSelected(myProduct)">
      </product-row>
    </div>
  `
})

export class ProductListComponent{
  productList: Product[];

  // custom event
  onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;
  
  constructor(){
    // custom event instance
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product):void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product:Product):boolean{
    if(!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}