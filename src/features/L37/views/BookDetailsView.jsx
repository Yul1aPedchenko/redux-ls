import { useParams, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { booksSelectors } from "../redux/books";
import PageHeading from "../components/PageHeading/PageHeading";

export default function BookDetailsView() {
  const location = useLocation();
  const { slug } = useParams();
  const bookId = slug.match(/[a-z0-9]+$/)[0];

  const book = useSelector((state) => booksSelectors.getBookWithAuthor(state, bookId));

  return (
    <>
      <PageHeading text={`Книга ${slug}`} />

      {book && (
        <>
          <Link to={location?.state?.from?.location ?? "../books"}>{location?.state?.from?.label ?? "Назад"}</Link>

          <hr />

          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>

          <p>Автор: {book.authorName}</p>

          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}
