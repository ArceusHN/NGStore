import { Injectable } from "@angular/core";
import { Product } from "../product.model";
import { HttpClient} from "@angular/common/http";

@Injectable({
    providedIn:"root"
})
export class ProductsService{

    constructor(private http: HttpClient){}

    getProducts(){
        return this.http.get<Product[]>("https://fakestoreapi.com/products");
    }

    getProduct(id){
        return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
    }

}