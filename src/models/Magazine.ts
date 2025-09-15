import LibraryItem from "./LibraryItem";

// Inheritance + Polymorphism
class Magazine extends LibraryItem{
     constructor(id :number,title:string,public issue: number){
          super(id,title);
     }
     getInfo(): string {
          return `Magazine : ${this.title}, Issue : ${this.issue}`
     }
}

export default Magazine;