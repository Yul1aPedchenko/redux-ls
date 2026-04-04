import { useState, useEffect, lazy, Suspense } from "react";
import { NavLink, Routes, Route, useParams } from "react-router-dom";
import * as bookShelfAPI from "../services/bookshelf-api.js";
import PageHeading from "../components/PageHeading/PageHeading.jsx";

const AuthorSubView = lazy(() => import("./AuthorSubView.jsx" /* webpackChunkName: "authors-subview" */));

export default function AuthorsView() {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <PageHeading text="Автори" />

      {authors && (
        <ul>
          {authors.map((author) => (
            <li key={author.id}>
              <NavLink to={`${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />

      <Suspense fallback={<h1>Завантажуємо підмаршрут...</h1>}>
        <Routes>
          <Route path=":authorId" element={authors ? <AuthorSubView authors={authors} /> : null} />
        </Routes>
      </Suspense>
    </>
  );
}
