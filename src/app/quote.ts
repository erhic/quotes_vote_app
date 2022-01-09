import { DatePipe } from "@angular/common";

export class Quote {
    constructor(
        public person: string,
        public quoteWords: string,
        public author:string,
        public upvote:number,
        public downvote:number,
        public timeElapsed:Date) { }
    
}
