import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import AppBar from "./components/AppBar/AppBar";

const HomeView = lazy(() => import("./views/HomeView"));
const BooksView = lazy(() => import("./views/BooksView"));
const BookDetailsView = lazy(() => import("./views/BookDetailsView"));
const AuthorsView = lazy(() => import("./views/AuthorsView"));

export const L37 = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route index element={<HomeView />} />
          <Route path="books" element={<BooksView />} />
          <Route path="books/:slug" element={<BookDetailsView />} />

          <Route path="authors" element={<AuthorsView />} />
        </Routes>
      </Suspense>
    </>
  );
};
