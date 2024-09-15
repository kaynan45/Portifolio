import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AddBooks from "./components/pages/AddBooks";
import BookList from "./components/pages/BookList";
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-books" element={<AddBooks />} />
          <Route path="/book-list" element={<BookList />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
