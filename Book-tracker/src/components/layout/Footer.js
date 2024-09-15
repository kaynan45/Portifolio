import styles from './Footer.module.css'

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <p><span>Book-tracker</span> &copy; 2024</p>
      <ul>
        <li>
          <FaFacebook className='icon' />
        </li>
        <li>
          <FaInstagram className='icon' />
        </li>
        <li>
          <FaLinkedin className='icon' />
        </li>
      </ul>
    </footer>
  )
}

export default Footer