import { createSelector } from "@reduxjs/toolkit";
import { getAuthors } from "../authors/authorsSelectors";

export const getBooks = (state) => state.l37.books.entities;

export const getBookById = createSelector([getBooks, (_, bookId) => bookId], (books, bookId) => books.find((book) => book.id === bookId));

export const getBooksByAuthor = createSelector([getBooks, (_, authorId) => authorId], (books, authorId) => books.filter((book) => book.authorId === Number(authorId)));

export const getBookWithAuthor = createSelector([getBooks, getAuthors, (_, bookId) => bookId], (books, authors, bookId) => {
  const book = books.find((b) => b.id === bookId);
  if (!book) return null;

  const author = authors.find((a) => a.id === Number(book.authorId));

  return {
    ...book,
    authorName: author?.name ?? "Невідомий автор",
  };
});
