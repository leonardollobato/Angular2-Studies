import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app',
  template: `
    <div class="inventory-app">
      <products-list
        [productList]="products"
        (onProductSelected)="productWasSelected($event)">
      </products-list>
    </div>
  `
})
export class InventoryComponent {
  private products: Product[];

  constructor(){
    this.products = [
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99),
      new Product(
        'TSHIRT',
        'A Nice Shirt',
        '/assets/images/products/blue-jacket.jpg',
        ['Unisex', 'Clothers'],
        54.99),
      new Product(
        'SHOES',
        'A SHoe that is Black',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Black'],
        159.99)
    ]
  }

  productWasSelected(product: Product):void{
    console.log('Product clicked: ', product);
  }
}


