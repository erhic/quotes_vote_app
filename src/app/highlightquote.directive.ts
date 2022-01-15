import { Directive ,ElementRef,Renderer2,OnInit,Input} from '@angular/core';

@Directive({
  selector: '[appHighlightquote]'
})
export class HighlightquoteDirective implements OnInit{
@Input()appHighlightquote:any
  constructor( 
    private elmRef: ElementRef, 
    private renderer: Renderer2) 
    { }
ngOnInit(){
  let roundVal = `${this.appHighlightquote}`;
    this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', roundVal);
  }
  highestVote(){}
}

