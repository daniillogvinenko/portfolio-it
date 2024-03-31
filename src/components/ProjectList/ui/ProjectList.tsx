import { Link } from "react-router-dom";
import classes from "./ProjectList.module.scss";

const Separator = () => <div className={classes.separation}></div>;

export const ProjectList = () => {
    return (
        <div className={classes.ProjectList}>
            <div className={classes.title}>Проекты</div>
            <Link to="/project/1">
                <div className={classes.bg1}>
                    <div className={classes.textContainer}>
                        <div className={classes.text}>Кибержесть</div>
                    </div>
                </div>
            </Link>
            <Separator />
            <Link to="/project/2">
                <div className={classes.bg2}>
                    <div className={classes.textContainer}>
                        <div className={classes.text}>Горно-Алтайск</div>
                    </div>
                </div>
            </Link>
            <Separator />
            <Link to="/project/3">
                <div className={classes.bg3}>
                    <div className={classes.textContainer}>
                        <div className={classes.text}>SoundWave</div>
                    </div>
                </div>
            </Link>
            <Separator />
            <Link to="/project/4">
                <div className={classes.bg4}>
                    <div className={classes.textContainer}>
                        <div className={classes.text}>Addis Flavors</div>
                    </div>
                </div>
            </Link>
            <Separator />
            <Link to="/project/5">
                <div className={classes.bg5}>
                    <div className={classes.textContainer}>
                        <div className={classes.text}>PProjects</div>
                    </div>
                </div>
            </Link>
            <Separator />
        </div>
    );
};
