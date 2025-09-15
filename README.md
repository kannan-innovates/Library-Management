# Library Management System (TypeScript OOP Project)

A beginner-friendly **Library Management System** implemented in **TypeScript** using **Object-Oriented Programming (OOP) principles**. This project demonstrates **Encapsulation**, **Inheritance**, **Polymorphism**, and **Abstraction** in a real-world scenario.

---

## 📂 Project Structure

Here is the file and directory structure for the project:

Of course! Here is a properly formatted and structured version of your README file. The corrected alignment for the project structure and clearer separation between sections will make it much easier to read on GitHub.

Markdown

# Library Management System (TypeScript OOP Project)

A beginner-friendly **Library Management System** implemented in **TypeScript** using **Object-Oriented Programming (OOP) principles**. This project demonstrates **Encapsulation**, **Inheritance**, **Polymorphism**, and **Abstraction** in a real-world scenario.

---

## 📂 Project Structure

Here is the file and directory structure for the project:

library-management/
├── src/
│   ├── models/
│   │   ├── LibraryItem.ts
│   │   ├── Book.ts
│   │   └── Magazine.ts
│   ├── entities/
│   │   ├── Member.ts
│   │   └── Library.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md


-   **`models/`**: Contains the abstract class `LibraryItem` and its child classes (`Book`, `Magazine`).
-   **`entities/`**: Contains classes for the core system entities (`Member`, `Library`).
-   **`index.ts`**: The entry point of the project where objects are created and methods are called.

---

## 💡 Core OOP Features

This project is built around the four fundamental principles of Object-Oriented Programming:

-   **Encapsulation**: The `borrowedItems` array in the `Member` class is `private`. Users can only interact with it through public methods like `borrowItem()` and `listBorrowedItems()`.
-   **Inheritance**: The `Book` and `Magazine` classes extend the abstract class `LibraryItem`, inheriting its properties and methods.
-   **Polymorphism**: The `getInfo()` method is defined in both `Book` and `Magazine` but behaves differently for each, providing specific details depending on the item type.
-   **Abstraction**: The `LibraryItem` class is `abstract` and cannot be instantiated directly. It serves as a blueprint, ensuring a consistent interface (`getInfo()`) for all types of library items.

---

## ⚙️ Installation & Setup

Follow these steps to get the project running on your local machine.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/library-management.git](https://github.com/your-username/library-management.git)
    cd library-management
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the project**
    ```bash
    npx ts-node src/index.ts
    ```

---

## 🧩 How It Works

1.  **`LibraryItem` (Abstract Class)**
    * Defines the common blueprint for all items that can be stored in the library.
    * Contains an `abstract` method `getInfo()` that every subclass is required to implement.

2.  **`Book` & `Magazine` (Child Classes)**
    * These classes `extend` the `LibraryItem` class.
    * They provide their own specific implementations of the `getInfo()` method, demonstrating polymorphism.

3.  **`Member`**
    * Represents a library member who can borrow items.
    * Stores a list of borrowed items privately (encapsulation).
    * Provides public methods to borrow items and list what has been borrowed.

4.  **`Library`**
    * Manages the collections of all items and registered members.
    * Provides methods to add new items, register new members, and display all available library items.