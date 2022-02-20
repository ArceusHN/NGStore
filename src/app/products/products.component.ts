import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../services/products.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];
  shoppingCart:Product[] = [];
  
  constructor(private storeService:StoreService,
              private productService:ProductsService) {
      this.shoppingCart = storeService.ShoppingCart;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  onAddToShoppingCar(product:Product){
    this.storeService.addProduct(product);
    let totalCompra = this.storeService.getTotal();
    console.log(totalCompra);
  }
}
