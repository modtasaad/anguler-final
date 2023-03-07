import { Directive,ElementRef,Input,HostListener} from '@angular/core';

@Directive({
  selector: '[appCustem]'
})
export class CustemDirective {

  constructor(  public myref:ElementRef) { 
    console.log(myref);
    myref.nativeElement.style.color=this.colour;
    
  }
  @HostListener("click")  click(){
    this.myref.nativeElement.style.color=this.colour.fgcolor;
    this.myref.nativeElement.style.backgroundColor=this.colour.bgcolour;
  }
  @Input("appCustem")  colour:any;

}
