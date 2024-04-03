import { Link } from "react-router-dom";
import classes from "./ProjectList.module.scss";
import { motion } from "framer-motion";

const Separator = () => <div className={classes.separation}></div>;

export const ProjectList = () => {
    const animationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },

        animate: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div className={classes.ProjectList}>
            <motion.div
                viewport={{ once: true }}
                variants={animationVariants}
                initial="initial"
                whileInView="animate"
                className={classes.title}
            >
                Проекты
            </motion.div>
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
