import { Link } from 'react-router';
import HomeIcon from 'react-icons/lib/fa/home';
import AddWidgIcon from 'react-icons/lib/fa/calendar-plus-o';
import ListWidgetsIcon from 'react-icons/lib/fa/table';

export const Menu = () =>
<nav className="menu">
  <Link to="/" activeClassName="selected">
    <HomeIcon />
  </Link>
  <Link to="/add-widget" activeClassName="selected">
    <AddWidgIcon />
  </Link>
  <Link to="/list-widgets" activeClassName="selected">
    <ListWidgetsIcon />
  </Link>
</nav>
