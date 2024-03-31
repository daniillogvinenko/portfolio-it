import { InterFont } from "../../InterFont/InterFont";
import classes from "./HeroSection.module.scss";

export const HeroSection = () => {
    return (
        <div className={classes.HeroSection}>
            <div className="container">
                <div className={classes.flex}>
                    <div className={classes.left}>
                        <div className={classes.name}>Привет, я Даниил</div>
                        <div className={classes.bold}>
                            ВЕБ-ДИЗАЙНЕР<InterFont>/</InterFont> РАЗРАБОТЧИК
                        </div>
                        <div>Из Санкт-Петербурга</div>
                    </div>
                    <div className={classes.right}></div>
                </div>
            </div>
        </div>
    );
};
