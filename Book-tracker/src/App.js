import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import AddBooks from './components/pages/AddBooks';
import BookList from './components/pages/BookList';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-books' element={<AddBooks />} />
        <Route path='/book-list' element={<BookList />} />
      </Routes>
    </Router>
  );
}

export default App;
