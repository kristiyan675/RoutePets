import {Link} from "react-router-dom";

const Header = ({
    isAuthenticated,
    username
                }) => {

    let guestNav = (
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Register</Link>
        </div>
    )
    let userNav = (
        <div id="user">
            <span>Welcome, email</span>
            <Link className="button" to="/my-pets">My Pets</Link>
            <Link className="button" to="/create">Add Pet</Link>
            <Link className="button" to="#">Logout</Link>
        </div>
    )


    return (
        <header id="site-header">

            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>

                    {isAuthenticated ?
                        userNav
                        :guestNav
                    }
                </section>
            </nav>
        </header>
    )
}

export default Header