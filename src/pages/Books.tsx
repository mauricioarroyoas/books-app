import { Link } from "react-router";
import styles from "../styles/pages/Books.module.css";

export default function Books() {
  const books = [
    {
      id: "1",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel about racial injustice in the Deep South.",
    },
    {
      id: "2",
      title: "1984",
      author: "George Orwell",
      description: "A dystopian story about totalitarianism and surveillance.",
    },
    {
      id: "3",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description: "A classic romance exploring manners and marriage.",
    },
    {
      id: "4",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A story of wealth, love, and the American Dream.",
    },
    {
      id: "5",
      title: "Moby-Dick",
      author: "Herman Melville",
      description: "An epic tale of obsession and the sea.",
    },
  ];

  return (
    <div className={styles.books}>
      {books.map((book) => {
        return (
          <div className={styles.book}>
            <span>author: {book.author}</span>
            <Link to={`/books/${book.id}`}>title: {book.title}</Link>
            <span>description: {book.description}</span>
          </div>
        );
      })}
    </div>
  );
}
