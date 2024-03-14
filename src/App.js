import './App.css';
import React, { useState } from 'react';

function App() {
  const [totalLikes, setTotalLikes] = useState(0);

  // Function to increment total likes
  const incrementTotalLikes = () => {
    setTotalLikes(totalLikes + 1);
  };

  return (
    <div>
      <Navbar totalLikes={totalLikes} />
      <BookLibrary incrementTotalLikes={incrementTotalLikes} />
    </div>
  );
}

const initialBooks = [
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    rating: 4,
    like: 0,
  },
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg',
    title: 'Ikigai: The Japanese secret to a long and happy life',
    author: 'Héctor García',
    rating: 4.1,
    like: 0,
  },
  {
    img: 'https://m.media-amazon.com/images/I/91b0X3BfLfL._AC_UY327_FMwebp_QL65_.jpg',
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    rating: 5,
    like: 0,
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71ihGxMQEBL._AC_UL254_SR254,254_.jpg',
    title: "It's Not Easy Being a Bunny",
    author: 'Marilyn Sadler',
    rating: 4.2,
    like: 0,
  },
  {
    img: 'https://m.media-amazon.com/images/I/5112eIqM9pL._SY445_SX342_.jpg',
    title: 'The Women',
    author: 'Kristin Hannah',
    rating: 3.4,
    like: 0,
  },
  {
    img: 'https://m.media-amazon.com/images/I/81AHTyq2wVL._SY342_.jpg',
    title: 'The Housemaid',
    author: ' Freida McFadden',
    rating: 3.8,
    like: 0,
  },
];
const BookLibrary = ({ incrementTotalLikes }) => {
  const [books, setBooks] = useState(initialBooks);

  function addLikes(index) {
    const newBooks = [...books];
    newBooks[index].like += 1;
    setBooks(newBooks);
    incrementTotalLikes(); // Increment the total likes in the App component
  }

  return (
    <div className="books-container">
      {books.map((book, index) => (
        <Book
          title={book.title}
          author={book.author}
          img={book.img}
          rating={book.rating}
          like={book.like}
          key={index}
          likes={book.like} // Pass individual book likes
          addLikes={() => addLikes(index)} // Corrected to pass the index
        />
      ))}
    </div>
  );
};

function handleInfo(title, rating) {
  console.log(`Rating for ${title}: ${rating}/5 `);
}

const Book = ({ title, author, img, rating, addLikes, likes }) => {
  return (
    <article className="book">
      <img src={img} alt={`Cover of the book titled "${title}"`} />
      <h3>{title}</h3>
      <h5>{author}</h5>
      <button
        className="info-button"
        onClick={() => handleInfo(title, rating)}
      >
        Rating
      </button>
      <button className="like-button" onClick={addLikes}>
        👍 <span>{likes} Like</span>
      </button>
    </article>
  );
};

const Navbar = ({ totalLikes }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Book Library</div>
      <div className="nav-links">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#services" className="nav-link">
          Total Likes: {totalLikes}
        </a>
        <a href="#contact" className="nav-link">
          Books: {initialBooks.length}
        </a>
      </div>
    </nav>
  );
};
export default App;
