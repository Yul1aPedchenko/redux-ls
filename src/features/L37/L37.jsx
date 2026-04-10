import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAuthors } from "./redux/authors/authorsOperations";
import { fetchBooks } from "./redux/books/booksOperations";

import AppBar from "./components/AppBar/AppBar";

const HomeView = lazy(() => import("./views/HomeView"));
const BooksView = lazy(() => import("./views/BooksView"));
const BookDetailsView = lazy(() => import("./views/BookDetailsView"));
const AuthorsView = lazy(() => import("./views/AuthorsView"));
const AuthorSubView = lazy(() => import('./views/AuthorSubView'))

export const L37 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(fetchBooks());
  }, [dispatch])
  return (
    <>
      <AppBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route index element={<HomeView />} />
          <Route path="books" element={<BooksView />} />
          <Route path="books/:slug" element={<BookDetailsView />} />

          <Route path="authors" element={<AuthorsView />}>
            <Route path=":authorId" element={<AuthorSubView />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
