import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="header__menu">
            <ul className="header__list">
                <li className="header__item">
                    <Link className="header__link" to={"/"}>
                        Items
                    </Link>
                </li>
                <li className="header__item">
                    <Link className="header__link" to={"/tracker"}>
                        Tracker
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
