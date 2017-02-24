import { Component, EventEmitter, Input, Output } from '@angular/core';

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
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99),
      new Product(
        'TSHIRT',
        'A Nice Shirt',
        '/resources/images/products/black-hat.jpg',
        ['Unisex', 'Clothers'],
        54.99),
      new Product(
        'SHOES',
        'A SHoe that is Black',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Shoes', 'Black'],
        159.99)
    ]
  }

  productWasSelected(product: Product):void{
    console.log('Product clicked: ', product);
  }
}

class Product{
  constructor(
    public sku:string,
    public name:string,
    public imageUrl:string,
    public department: string[],
    public price:number
  ){
  }
}


@Component({
  selector:'products-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `
    <div class="ui items">
      <product-row
        *ngFor="let myProduct of productList"
        [product]="myProduct"
        (click)='clicked(myProduct)"
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
}

