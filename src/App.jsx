import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import BookList from "./components/BookList.jsx";
import BookDetails from "./components/BookDetails.jsx";
import Favourites from "./components/Favourites.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
