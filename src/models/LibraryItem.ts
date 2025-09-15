// Abstract base class = Abstraction
abstract class LibraryItem {
  constructor(public id: number, public title: string) {}

  // Abstract method = must be implemented by children
  abstract getInfo(): string;
}

export default LibraryItem;