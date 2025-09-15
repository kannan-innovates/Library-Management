# Library Management System (TypeScript OOP Project)

A beginner-friendly **Library Management System** implemented in **TypeScript** using **Object-Oriented Programming (OOP) principles**.  
This project demonstrates **Encapsulation, Inheritance, Polymorphism, and Abstraction** in a real-world scenario.

---

## 📂 Project Structure

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

___

- **models/** → Contains abstract and child classes for library items (`LibraryItem`, `Book`, `Magazine`).  
- **entities/** → Contains classes for system entities (`Member`, `Library`).  
- **index.ts** → Entry point of the project where objects are created and methods are called.  

---

## 💡 Features

- **Encapsulation** → `borrowedItems` in `Member` is private; users can only interact via class methods.  
- **Inheritance** → `Book` and `Magazine` extend the abstract class `LibraryItem`.  
- **Polymorphism** → `getInfo()` method behaves differently depending on the type of item.  
- **Abstraction** → `LibraryItem` is abstract; cannot be instantiated directly, ensures a consistent interface for all items.

---

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/library-management.git
cd library-management

2. Install dependencies
```bash
npm install

3.Run the project
```bash
npx ts-node src/index.ts

⸻

🧩 How it Works
	1.	LibraryItem (Abstract Class)
	•	Defines the blueprint for all library items.
	•	Contains the abstract method getInfo() that every subclass must implement.
	2.	Book & Magazine (Child Classes)
	•	Inherit from LibraryItem.
	•	Implement getInfo() differently, demonstrating polymorphism.
	3.	Member
	•	Stores borrowed items privately (encapsulation).
	•	Provides methods to borrow and list borrowed items.
	4.	Library
	•	Stores all items and members.
	•	Provides methods to add items, register members, and display library items.