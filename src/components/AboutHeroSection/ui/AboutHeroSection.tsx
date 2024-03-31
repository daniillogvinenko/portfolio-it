import { Link } from "react-router-dom";
import { Button } from "../../Button";
import classes from "./AboutHeroSection.module.scss";

export const AboutHeroSection = () => {
    return (
        <div className={classes.AboutHeroSection}>
            <div className="container">
                <div className={classes.flex}>
                    <div className={classes.left}>
                        <div className={classes.bold}>ДАНИИЛ ЛОГВИНЕНКО</div>
                        <div className={classes.subtitle}>Веб дизайнер и разработчик</div>
                        <Link to="/">
                            <Button className={classes.btn1}>Посмотреть проекты</Button>
                        </Link>
                    </div>
                    <div className={classes.right}></div>
                    <Link to="/">
                        <Button className={classes.btn2}>Посмотреть проекты</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
