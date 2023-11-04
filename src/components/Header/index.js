import {Link} from 'react-router-dom'

import './index.css'

import globalDataContext from '../../textContext'

const Header = () => (
  <globalDataContext.Consumer>
    {value => {
      const {change} = value
      return (
        <nav className="headBar">
          <h1>movieDB</h1>
          <ul className="navItems">
            <Link to="/" className="list_decoration">
              <li>Popular</li>
            </Link>
            <Link to="/top-rated" className="list_decoration">
              <li>Top Rated</li>
            </Link>
            <Link to="/upcoming" className="list_decoration">
              <li>Upcoming</li>
            </Link>
            <li>
              <input type="text" />
            </li>
            <Link to="/search">
              <li>
                <button type="button">Search</button>
              </li>
            </Link>
          </ul>
        </nav>
      )
    }}
  </globalDataContext.Consumer>
)

export default Header
