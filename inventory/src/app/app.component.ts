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

@Component({
  selector: 'product-row',
  inputs:['product'],
  host: {'class':'item'},
  template: `
    <product-image [product]="product"></product-image>
    <div class="content">
      <div class="header"> {{ product.name }} </div>
      <div class="meta">
        <div class="product-sku"> SKU #{{ product.sku }}</div>
      </div>
      <div class="description">
        <product-department [product]="product"></product-department>
      </div>
    </div>
    <price-display [price]="product.price"></price-display>
  `
})

export class ProductRowComponent{
  product:Product;
}

@Component({
  selector: 'product-image',
  inputs:['product'],
  host: {'class':'ui small image'},
  template: `
    <img class="product-image" [src]="product.imageUrl">
  `
})

export class ProductImageComponent{
  product:Product;
}

@Component({
  selector: 'product-department',
  inputs:['product'],
  template: `
    <div class="product-department">
      <span *ngFor="let name of product.department; let i=index">
        <a href="#"> {{ name }} </a>
        <span> {{ i < (product.department.length -1) ? '>' : '' }} </span>
      </span>
    </div>
  `
})

export class ProductDepartmentComponent{
  product:Product;
}

@Component({
  selector: 'price-display',
  inputs:['price'],
  template: `
    <div class="price-display">\${{ price }}</div>
  `
})

export class PriceDisplayComponent{
  price:number;
}

