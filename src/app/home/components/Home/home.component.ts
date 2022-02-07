import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgParent:string;
  imgDefault:string;
  showImg: boolean;
  
  constructor() {
    this.imgDefault = "https://via.placeholder.com/150";
    this.showImg = true;
   }

  ngOnInit(): void {
  }

  onLoaded(img: string):void{
    console.log(img);
  }

  toggle():void{
    this.showImg = !this.showImg;
  }

}
