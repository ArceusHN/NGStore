import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.css']
})
export class ImgComponent{

    img: string = "";

    @Input('img') 
        set setImg(newImg: string){
            this.img = newImg;
        }

    @Output() loaded = new EventEmitter<string>();
    imgDefault:string;
    counter: 0;
    counterRef: any;

    constructor(){
        this.imgDefault = "https://via.placeholder.com/150";
    }

    ngOnInit(): void{
        this.counterRef = setInterval(()=>{ // Pasa con intervals, obsevables con los subscribe, settimeout, eventos que queden activos.
            this.counter++;
            console.log(this.counter);
        },  1000)
    }

    ngOnDestroy():void{
        clearInterval(this.counterRef);
    }

    imgError(e):void{
        this.img = this.imgDefault;
    }

    imgLoaded():void{
        console.log("Img loaded!");
        this.loaded.emit(this.img);
    }
}