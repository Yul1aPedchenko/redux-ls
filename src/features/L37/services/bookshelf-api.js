import axios from "axios";
import { booksAndAuthorsApi } from "../../../api/BooksAndAuthorsApi";

export async function fetchAuthors() {
  const { data } = await booksAndAuthorsApi.get(`/authors`);
  return data;
}

export async function fetchBooks() {
  const { data } = await booksAndAuthorsApi.get(`/books`);
  return data;
}

export async function fetchBookById(bookId) {
  const { data } = await booksAndAuthorsApi.get(`/books/${bookId}?_expand=author`);
  return data;
}
