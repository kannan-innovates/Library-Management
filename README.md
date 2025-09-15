# Library Management System (TypeScript OOP Project)

A beginner-friendly **Library Management System** implemented in **TypeScript** using **Object-Oriented Programming (OOP) principles**.  
This project demonstrates **Encapsulation, Inheritance, Polymorphism, and Abstraction** in a real-world scenario.

---

## 📂 Project Structure

```
library-management/
│── src/
│   ├── models/
│   │   ├── LibraryItem.ts
│   │   ├── Book.ts
│   │   ├── Magazine.ts
│   ├── entities/
│   │   ├── Member.ts
│   │   ├── Library.ts
│   ├── index.ts
│── package.json
│── tsconfig.json
│── README.md
```

---

**Structure Overview:**

- **models/** → Contains abstract and child classes for library items (`LibraryItem`, `Book`, `Magazine`).  
- **entities/** → Contains classes for system entities (`Member`, `Library`).  
- **index.ts** → Entry point of the project where objects are created and methods are called.  

---

## 🎯 Core OOP Features

This project is built around the four fundamental principles of Object-Oriented Programming:

- **Encapsulation**: The `borrowedItems` array in the `Member` class is `private`. Users can only interact with borrowed items through class methods.
- **Inheritance**: The `Book` and `Magazine` classes extend the abstract class `LibraryItem`.
- **Polymorphism**: The `getInfo()` method is defined in both `Book` and `Magazine` but behaves differently depending on the item type.
- **Abstraction**: The `LibraryItem` class is `abstract` and cannot be instantiated directly. It ensures a consistent interface for all library items.

---

## ⚙️ Installation & Setup

Follow these steps to get the project running on your local machine.

1. **Clone the repository**
```bash
git clone https://github.com/your-username/library-management.git
cd library-management
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the project**
```bash
npx ts-node src/index.ts
```

---

## 🧩 How It Works

### 1. LibraryItem (Abstract Class)
- Defines the blueprint for all library items.
- Contains the abstract method `getInfo()` that every subclass must implement.

### 2. Book & Magazine (Child Classes)
- Inherit from `LibraryItem`.
- Implement `getInfo()` differently, demonstrating **polymorphism**.

### 3. Member
- Stores borrowed items privately (**encapsulation**).
- Provides methods to borrow and list borrowed items.

### 4. Library
- Stores all items and members.
- Provides methods to add items, register members, and display library items.

---

## 🛠️ Tech Stack

- **Language**: TypeScript
- **Runtime**: Node.js
- **Development**: ts-node for running TypeScript directly

---

## 📝 Example Usage

```typescript
// Create library items
const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0-7432-7356-5");
const magazine = new Magazine("National Geographic", "June 2023", 245);

// Create library and member
const library = new Library();
const member = new Member("John Doe", "M001");

// Add items to library
library.addItem(book);
library.addItem(magazine);

// Register member and borrow items
library.registerMember(member);
member.borrowItem(book);
```

---

## 🎯 Learning Objectives

This project helps you understand:

- How to implement abstract classes in TypeScript
- The difference between inheritance and composition
- How polymorphism works in practice
- Why encapsulation is important for data security
- How to structure a TypeScript project with proper separation of concerns