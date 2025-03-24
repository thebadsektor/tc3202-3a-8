import React, { useState } from "react";

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", audio: "gatsby.mp3", cover: "gatsby.jpg" },
  { id: 2, title: "1984", author: "George Orwell", audio: "1984.mp3", cover: "1984.jpg" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", audio: "mockingbird.mp3", cover: "mockingbird.jpg" }
];

const BookCard = ({ book, onPlay }) => (
  <div className="p-4 m-2 bg-white shadow-lg rounded-2xl w-64 hover:scale-105 transition-transform">
    <div className="flex flex-col items-center">
      <img src={book.cover} alt={book.title} className="w-40 h-56 object-cover rounded-lg mb-4 shadow-md" />
      <h2 className="text-xl font-semibold text-center">{book.title}</h2>
      <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
      <button onClick={() => onPlay(book.audio)} className="mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 px-4 py-2 rounded-full shadow-md">
        🎧 Listen
      </button>
    </div>
  </div>
);

const BookCollection = () => {
  const [currentAudio, setCurrentAudio] = useState(null);

  const handlePlay = (audioSrc) => {
    if (currentAudio) currentAudio.pause();
    const audio = new Audio(audioSrc);
    setCurrentAudio(audio);
    audio.play();
  };

  return (
    <div className="p-8 bg-gradient-to-br from-three to-six min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700 drop-shadow">My Book Collection</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onPlay={handlePlay} />
        ))}
      </div>
    </div>
  );
};

export default BookCollection;
