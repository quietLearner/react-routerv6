import {
  Routes,
  Route,
  Link,
  useRoutes,
  NavLink,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import BookRoutes from "./BookRoutes";
import NavLayout from "./NavLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const loc = useLocation();
  console.log(loc);

  let element = useRoutes([
    {
      path: "/",
      element: <NavLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      {/* <Routes location="/books">
        <Route path="/books" element={<h1>Extra Content</h1>}></Route>
      </Routes> */}
      <nav>
        <ul>
          <li>
            <NavLink to="/" state={"hi"}>
              Home
            </NavLink>
            <br />
            <Link to="/books">Books</Link>
            <br />
          </li>
        </ul>
      </nav>
      {loc.state}
      {/* {element} */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/books" element={<BookList />}></Route>
        <Route path="/books/:id" element={<Book />}></Route>
        <Route path="/books/new" element={<NewBook />}></Route> */}
        {/* <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}
        <Route path="/books/*" element={<BookRoutes />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
