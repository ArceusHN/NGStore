import { Component, OnChanges, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  counter:number = 0;
  constructor(private storeService:StoreService) {
    this.storeService.ShoppingCart$.subscribe(products => {
      this.counter = products.length;
    });

    this.counter = this.storeService.ShoppingCart.length;
  }
  activeMenu: boolean = false;

  ngOnChanges():void{
   
  }

  ngOnInit(): void {
 
  }

  toggleMenu():void{
    this.activeMenu = !this.activeMenu;
  }
}
