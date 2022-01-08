import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuoteApp';
  // unassigned variable,to be updated on imput
  nameOfAuthor=""
  emailOfAuthour=""
  quoteFromAuthor=""
  dateOfPost=""
  upvoteCount=""
  downvoteCount=""



} 
