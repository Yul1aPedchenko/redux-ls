import { useParams, useLocation, Link, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { booksSelectors } from "../redux/books";

const BASE_PATH = "/lessons/l37";

export default function AuthorSubView() {
  const { authorId } = useParams();
  const location = useLocation();

  const { authors, books } = useOutletContext();

  const author = authors.find((a) => a.id === Number(authorId));
  const authorBooks = useSelector((state) => booksSelectors.getBooksByAuthor(state, authorId));

  if (!author) return <p>Автор не знайдений</p>;

  return (
    <>
      <h2>{author.name}</h2>

      <ul>
        {authorBooks.map((book) => (
          <li key={book.id}>
            <Link
              to={`${BASE_PATH}/books/${book.id}`}
              state={{
                from: {
                  location,
                  label: "Назад до автора",
                },
              }}
            >
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
