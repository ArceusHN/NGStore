import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnChanges {
  @Input() product: Product; //Recibir props de otro componente
  @Output() addProduct: EventEmitter<Product> = new EventEmitter();

  today = new Date();

  constructor() {
    // before render
    // NO async -- once time
    // console.log('1.constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    // before - during render
    // changes inputs -- multiples times
    //console.log('2.ngOnChanges');
    //console.log(changes);
  }

  ngOnInit() {
    // before render
    // async - fetch -- once time
    //console.log('3.ngOnInit');
  }

  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    //console.log('4.ngOnDestroy');
  }

  addCarrito() {
    console.log('Añadir al carrito');
    this.addProduct.emit(this.product);
  }
}
