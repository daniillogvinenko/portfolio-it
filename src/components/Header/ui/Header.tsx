import { Link } from "react-router-dom";
import { Navbar } from "../../Navbar/Navbar";
import classes from "./Header.module.scss";

export const Header = () => {
    return (
        <div className={classes.Header}>
            <div className="container">
                <div className={classes.flex}>
                    <div className={classes.logo}></div>
                    <Navbar />
                    <div className={classes.items}>
                        <Link to="/">Главная</Link>
                        <Link to="/about">Обо мне</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
