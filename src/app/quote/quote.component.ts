import { Component, OnInit ,} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1,person:'Alex', quoteWords:`"never never finding Nemo"`,author:'John',upvote:20,downvote:2,timeElapsed:new Date(2019,2,14)},
    {id:4,person:'Miriam',quoteWords:`"Buy Cookies"`,author:'Brian',upvote:12,downvote:1,timeElapsed:new Date()},
    {id:3,person:'Ann',quoteWords:`"Get new Phone Case"`,author:'Eistien',upvote:42,downvote:16,timeElapsed:new Date()},
    // {person:'Joan',quoteWords:`"Get Dog Food"`,author:'Bob',upvote:20,downvote:2,timeElapsed:new Date()},
    // {person:'Tedd',quoteWords:`"Solve math homework"`,author:'Nelson Mandela',upvote:20,downvote:2,timeElapsed:new Date()},
    // {person:'Mark',quoteWords:`"Plot my world domination plan"`,author:'Lurther King',upvote:20,downvote:2,timeElapsed:new Date()}
  ];
 
  addQuote(quote:Quote) {
      const quoteLength = this.quotes.length;
      quote.id = quoteLength + 1;
      this.quotes.push(quote);

 }
    deleteQuote(isComplete: any, index: number){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].person}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }
  

 completequote(isComplete:boolean, index:number) {
   if (isComplete) {
       const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].person}`);
       if (toDelete) {
           this.quotes.splice(index, 1);
       }
   }
}
voteadd(i:number) {
  this.quotes[i].upvote += 1;

      console.log(this.quotes[i]);

}
voteminus(i:number) {
this.quotes[i].downvote += 1;

    console.log(this.quotes[i]);
}
  addNewQuote(quote:Quote){this.quotes.push(quote)
    console.log(quote)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

