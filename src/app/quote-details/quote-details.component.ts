import { Component,Output,OnInit,Input,EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  isComplete: any;

  @Input()
  quote!: Quote;
  
  @Output() addVote = new EventEmitter<Quote>();

    getVote(){
      this.quote.upvote++ 
      this.addVote.emit(this.quote);
      console.log(this.quote)
  


    }
    @Output() minusVote = new EventEmitter<Quote>();

    deVote(){
      this.quote.downvote++;
      this.minusVote.emit(this.quote);
      console.log(this.quote)


    }

    
    @Output() removeQuote = new EventEmitter<Quote>();


   

  
  deleteQuote(){
    this.removeQuote.emit(this.quote);
    console.log(this.quote)
  }

  completequote(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
