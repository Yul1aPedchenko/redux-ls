import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import * as bookShelfAPI from "../services/bookshelf-api.js";
import PageHeading from "../components/PageHeading/PageHeading.jsx";

export default function AuthorsView() {
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
    bookShelfAPI.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageHeading text="Автори" />

      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <NavLink to={`${author.id}`}>{author.name}</NavLink>
          </li>
        ))}
      </ul>

      <hr />

      <Outlet context={{ authors, books }} />
    </>
  );
}
