import React from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import BookList from "./pages/BookList";
import NewBook from "./pages/NewBook";
import BookLayout from "./BookLayout";

const BookRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/books" element={<BookList />}></Route>
    <Route path="/books/:id" element={<Book />}></Route>
    <Route path="/books/new" element={<NewBook />}></Route> */}
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
};

export default BookRoutes;
