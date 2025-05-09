import { Link, NavLink } from "react-router"
import { sidebarItems } from "~/constants"

const NavItems = () => {
  return (
    <div className="nav-items">
        <Link to='/' className="logo">
            <img src="#" alt="logo" />
            <h1>Tourism</h1>
        </Link>
        <div className="container">
            <nav>
                {sidebarItems.map(({id,href, icon, label}) => (
                    <NavLink to={href} key={id}>
                        {label}
                    </NavLink>
                ))}
            </nav>
        </div>
    </div>
  )
}

export default NavItems