import { Component, OnInit ,} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {person:'Alex', quoteWords:`"never never finding Nemo"`,author:'John',upvote:20,downvote:2,timeElapsed:new Date()},
    {person:'Miriam',quoteWords:`"Buy Cookies"`,author:'Brian',upvote:20,downvote:2,timeElapsed:new Date()},
    {person:'Ann',quoteWords:`"Get new Phone Case"`,author:'Eistien',upvote:20,downvote:2,timeElapsed:new Date()},
    {person:'Joan',quoteWords:`"Get Dog Food"`,author:'Bob',upvote:20,downvote:2,timeElapsed:new Date()},
    {person:'Tedd',quoteWords:`"Solve math homework"`,author:'Nelson Mandela',upvote:20,downvote:2,timeElapsed:new Date()},
    {person:'Mark',quoteWords:`"Plot my world domination plan"`,author:'Lurther King',upvote:20,downvote:2,timeElapsed:new Date()}
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
