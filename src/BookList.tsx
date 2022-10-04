import { createSignal } from "solid-js";

type Book = {
  title: string;
  author: string;
};

const initialBooks: Book[] = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

export function BookList() {
  const [books, setBooks] = createSignal(initialBooks);

  return (
    <ul>
      <li>
        Code Complete{" "}
        <span style={{ "font-style": "italic" }}>({books()[0].author})</span>
      </li>
      <li>
        The Hobbit{" "}
        <span style={{ "font-style": "italic" }}>({books()[1].author})</span>
      </li>
    </ul>
  );
}