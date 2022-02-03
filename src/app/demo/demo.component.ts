import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'platzi-store';
  power = 10;
  items: string[] = ['Mario', 'Kennet', 'Omar', 'Javier'];

  addItem() {
    console.log(this.title);
    this.items.push(this.title);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
