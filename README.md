# Book Collection CRUD Application
This is a CRUD (Create, Read, Update, Delete) application built using React, Node.js, and MongoDB Atlas. It allows users to manage a collection of books, including adding new books, viewing existing books, updating book information, and deleting books from the collection.

## Features

- **Add Book:** Users can add new books to their collection by providing the book title, author, genre, and publication date.

- **View Books:** Users can view the list of books in their collection, including the book details such as title, author, genre, and publication date.

- **Update Book:** Users can update the information of existing books in their collection, including modifying the title, author, genre, and publication date.

- **Delete Book:** Users can delete books from their collection, removing them permanently from the database.


## Technologies Used
- React
- Node.js
- MongoDB Atlas
- ExpressJS


## Installation

1. Clone the repository: 
```
git clone https://github.com/raj-71/bookCollectionCRUD.git
```
2. Navigate to the project directory:
```
cd bookCollectionCRUD
```
3. Install the dependencies for the backend:
```
npm install
```
4. Install the dependencies for the frontend:
```
cd frontend
npm install
```

## Configuration

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas.
2. Set up a new cluster and obtain the connection string.
3. Replace the mongoURI value in the `/config/default.json` file with your MongoDB Atlas connection string.

## Usage

1. Start the backend server:
```
node app.js
```
2. Open a new terminal window and navigate to the client directory:
```
cd frontend
```
3. Start the frontend development server:
```
npm run start
```
4. Access the application in your browser at `http://localhost:3000`


## Folder Structure

- `frontend/`: Contains the frontend React application.
- `/`: Contains the backend Node.js application.
- `routes/`: Contains the API routes for book CRUD operations.
- `models/`: Contains the Mongoose models for the book schema.
- `config/`: Contains the configuration files for the database connection.
