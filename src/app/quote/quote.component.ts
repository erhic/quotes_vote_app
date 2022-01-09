import { Component, OnInit ,} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1, name:'never never finding Nemo',author:'John'},
    {id:2,name:'Buy Cookies',author:'John'},
    {id:3,name:'Get new Phone Case',author:'John'},
    {id:4,name:'Get Dog Food',author:'John'},
    {id:5,name:'Solve math homework',author:'John'},
    {id:6,name:'Plot my world domination plan',author:'John'},
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
