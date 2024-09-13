import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <ul>
      <li>
      <Link to='/'>Home</Link>
      </li>
      <li>
      <Link to='/add-books'>Add books</Link>
      </li>
      <li>
      <Link to='/book-list'>Home</Link>
      </li>
    </ul>
  )
}

export default Navbar