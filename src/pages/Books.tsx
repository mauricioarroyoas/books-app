import { Link } from "react-router";
import styles from "../styles/pages/Books.module.css";
import { books } from "../data/Books";

export default function Books() {
  return (
    <div className={styles.books}>
      {books.map((book) => {
        return (
          <div key={book.id} className={styles.book}>
            <span>author: {book.author}</span>
            <Link to={`/books/${book.id}`}>title: {book.title}</Link>
            <span>description: {book.description}</span>
          </div>
        );
      })}
    </div>
  );
}
