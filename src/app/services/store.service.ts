import { Injectable } from "@angular/core";
import { Product } from "../product.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class StoreService{
    private _ShoppingCart: Product[] = [];
    private ShoppingCartBS = new BehaviorSubject<Product[]>([]);

    private _ShoppingCart$ = this.ShoppingCartBS.asObservable();

    constructor(){
        this.checkLocalStorage();
    }

    checkLocalStorage():void{
        let data = localStorage.getItem("ShoppingCart");
        if(data && data.trim() != ""){
           this._ShoppingCart = JSON.parse(data); 
        }else{
            localStorage.setItem("ShoppingCart", "");
        }
    }

    addProduct(product: Product):void{
        this._ShoppingCart.push(product);
        this.ShoppingCartBS.next(this._ShoppingCart);
        let data = localStorage.getItem("ShoppingCart");
        if(data.trim() != ""){
            let dataConv = JSON.parse(data);
            localStorage.setItem("ShoppingCart", JSON.stringify([...dataConv, product]));
        }else{
            localStorage.setItem("ShoppingCart", JSON.stringify([product]));
        }
    }

    getTotal():number{
        return this._ShoppingCart.reduce((acc, product)=> acc + product.price, 0);
    }

    get ShoppingCart():Product[]{
        console.log(this._ShoppingCart)
        return this._ShoppingCart;
    }

    get ShoppingCart$():Observable<Product[]>{
        return this._ShoppingCart$;
    }

}