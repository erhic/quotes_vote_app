import { Component, OnInit,Input,EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  isComplete: any;
  
  completequote(complete:boolean){
    this.isComplete.emit(complete);
  }@Input()
  quote!: Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
