import LibraryItem from "../models/LibraryItem";
import Member from "./Member";

class Library {
     private items: LibraryItem[] = [];
     private members: Member[] = [];

     addItem(item: LibraryItem) {
          this.items.push(item);
     }

     registerMember(member: Member) {
          this.members.push(member);
     }

     showItems() {
          console.log("Library items:");
          this.items.forEach(item => console.log(" - " + item.getInfo()));
     }
}

export default Library;