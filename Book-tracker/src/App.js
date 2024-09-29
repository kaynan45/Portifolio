import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AddBooks from "./components/pages/AddBooks";
import BookList from "./components/pages/BookList";
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import ReadBooks from "./components/pages/ReadBooks";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-books" element={<AddBooks />} />
          <Route path="/book-list" element={<BookList />} />
          <Route path="/read-books" element={<ReadBooks />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
