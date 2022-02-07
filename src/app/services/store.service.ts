import { Injectable } from "@angular/core";
import { Product } from "../product.model";

@Injectable({
    providedIn: "root"
})
export class StoreService{
    private ShoppingCart: Product[] = [];

    constructor(){}

    addProduct(product: Product):void{
        this.ShoppingCart.push(product);
    }

    getTotal():number{
        return this.ShoppingCart.reduce((acc, product)=> acc + product.price, 0);
    }

    getShoppingCart(){
        return this.ShoppingCart;
    }

}