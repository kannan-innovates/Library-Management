import LibraryItem from "../models/LibraryItem";

// Encapsulation example
class Member {
     private borrowedItems: LibraryItem[] = [];

     constructor(public name: string) { }

     borrow(item: LibraryItem) {
          this.borrowedItems.push(item);
          console.log(`${this.name} borrowed ${item.title}`);
     }
     listBorrowed() {
          console.log(`${this.name}'s borrowed items:`);
          this.borrowedItems.forEach(item => console.log(" - " + item.getInfo()));
     }
}

export default Member;