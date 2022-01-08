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
  downVoteCount=""

  // function to listen on click button
  getDataFromForm(){
    // created object inside a function
    const dataInForm ={
  nameOfAuthor:this.nameOfAuthor,
  emailOfAuthour:this.emailOfAuthour,
  quoteFromAuthor:this.quoteFromAuthor,

  dateOfPost:this.dateOfPost,
  upvoteCount:this.upvoteCount,
  downvoteCount:this.downVoteCount
    }

  }


} 
