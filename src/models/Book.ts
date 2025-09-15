import LibraryItem from "./LibraryItem";

// Inheritance + Polymorphism
class Book extends LibraryItem {

     constructor(id: number, title: string, public author: string) {
          super(id, title)
     }
     getInfo(): string {
          return `Book: ${this.title} by ${this.author}`
     }
}

export default Book;