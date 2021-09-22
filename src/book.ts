class Book implements Item{

    author: String;
    constructor(author:String){
        this.author = author;
    }

    display(arg:any): void{
        console.log(`${this.author}`);
    }
}