import "./index.css";
import App from "./components/App.tsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import Books from "./pages/Books.tsx";
import BookDetail from "./pages/BookDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}></Route>
        <Route path="books" element={<Books />}></Route>
        <Route path="books/:bookId" element={<BookDetail />}></Route>

        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
