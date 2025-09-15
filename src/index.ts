import Library from "./entities/Library";
import Member from "./entities/Member";
import Book from "./models/Book";
import Magazine from "./models/Magazine";

const library = new Library();

const book1 = new Book(1, "The Alchemist", "Paulo Coelho");
const mag1 = new Magazine(2, "National Geographic", 101);

library.addItem(book1);
library.addItem(mag1);

const member1 = new Member("Kannan");
library.registerMember(member1);

library.showItems();

member1.borrow(book1);
member1.listBorrowed();