import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";
import { InterFont } from "../../InterFont/InterFont";

export const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <div className="container">
                <div className={classes.flex}>
                    <div className={classes.left}>
                        <div className={classes.title}>Контакты</div>
                        <div className={classes.links}>
                            <Link target="_blank" to="https://github.com/">
                                GitHub
                            </Link>
                            <Link target="_blank" to="https://web.telegram.org/">
                                Telegram
                            </Link>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div>
                            <InterFont>+</InterFont>7 999 999 99 99
                        </div>
                        <div>
                            daniillogvinenkodev<InterFont>@</InterFont>mail.ru
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
