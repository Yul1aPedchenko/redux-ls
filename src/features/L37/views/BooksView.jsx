import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import slugify from "slugify";
import { useSelector, useDispatch } from "react-redux";
import { booksOperations, booksSelectors } from "../redux/books";
import PageHeading from "../components/PageHeading/PageHeading";

const makeSlug = (string) => slugify(string, { lower: true });

export default function BooksView() {
  const location = useLocation();
  const dispatch = useDispatch();
  const books = useSelector(booksSelectors.getBooks);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(booksOperations.fetchBooks());
    };

    fetchData();
  }, [dispatch]);
  return (
    <>
      <PageHeading text="Книги" />

      {books.length > 0 && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link
                to={{
                  pathname: `${makeSlug(`${book.id}`)}`,
                  state: {
                    from: {
                      location,
                      label: "Назад до всіх книг",
                    },
                  },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
