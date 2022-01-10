import { DatePipe } from "@angular/common";

export class Quote {
    [x: string]: any;
    // public showDescription!: boolean;
    
    constructor(
        public id: number,
        public person: string,
        public quoteWords: string,
        public author:string,
        public upvote:number,
        public downvote:number,
        public timeElapsed:Date) { }
       
            
    
}
