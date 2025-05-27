import styles from "../styles/pages/BookDetail.module.css";
import { books } from "../data/Books";
import type { Book } from "../types/Book";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function BookDetail() {
  const { bookId } = useParams();
  const [book, setBook] = useState<Book>(null!);

  useEffect(() => {
    const getBook = () => {
      const foundBook = books.find((book) => book.id === bookId)!;
      setBook(foundBook);
    };

    getBook();
  }, []);

  return (
    <div className={styles.bookDetail}>
      {book ? (
        <>
          <span className={styles.title}>title: {book?.title}</span>
          <span className={styles.description}>
            description: {book?.description}
          </span>
        </>
      ) : (
        <p>book not fonud</p>
      )}
    </div>
  );
}
