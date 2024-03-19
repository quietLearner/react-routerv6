import { useState, React } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const BookLayout = () => {
  // const [number, setNumber] = useState(null);
  const [filter, setFilter] = useSearchParams({ n: 3 });
  const number = filter.get("n");
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />

      <Link to={`/books/${number}`}>Book {number}</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      <Outlet context={{ hello: "world" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setFilter({ n: e.target.value })}
      />
    </>
  );
};

export default BookLayout;
