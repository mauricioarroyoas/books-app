import styles from "../styles/pages/BookDetail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function BookDetail() {
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
  const { bookId } = useParams();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    const getBook = () => {
      const foundBook = books.find((book) => book.id === bookId);
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
