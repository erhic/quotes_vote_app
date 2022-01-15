import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { HighlightquoteDirective } from '../highlightquote.directive';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
     {id:1,person:'Alex', quoteWords:`"You only live once, but if you do it right, once is enough."`,author:'John',upvote:20,downvote:2,timeElapsed:new Date(2019,2,14)},
    {id:2,person:'Miriam',quoteWords:`"Not how long, but how well you have lived is the main thing."`,author:'Brian',upvote:12,downvote:1,timeElapsed:new Date(2020,12,12)},
    {id:3,person:'Ann',quoteWords:`"Don’t settle for what life gives you; make life better and build something."`,author:'Eistien',upvote:42,downvote:16,timeElapsed:new Date(2021,1,15)},
    // {person:'Joan',quoteWords:`"Get Dog Food"`,author:'Bob',upvote:20,downvote:2,timeElapsed:new Date()},
    // {person:'Tedd',quoteWords:`"Solve math homework"`,author:'Nelson Mandela',upvote:20,downvote:2,timeElapsed:new Date()},
    // {person:'Mark',quoteWords:`"Plot my world domination plan"`,author:'Lurther King',upvote:20,downvote:2,timeElapsed:new Date()}
  ];
 
//   addQuote(quote:Quote) {
//       const quoteLength = this.quotes.length;
//       quote.id = quoteLength + 1;
//       this.quotes.push(quote);

//  }
    deleteQuote(isComplete: any, index: number){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].person}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }

    addVotes(quote:Quote,i:number){
      this.quotes[i].upvote= quote.upvote;

    }

    deVotes(quote:Quote,i:number){
      this.quotes[i].downvote= quote.downvote;

    }
    
  addNewQuote(quote:Quote){
   

      const quoteLength = this.quotes.length;
      quote.id = quoteLength + 1;
      this.quotes.push(new Quote(quote.id,quote.person,quote.quoteWords,quote.author,quote.upvote,quote.downvote,quote.timeElapsed));

      console.log(this.quotes);
  }
 
  constructor() { }

  ngOnInit(): void {
  }
  highestVote(){
  
  }

}

