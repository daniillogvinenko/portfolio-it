import { Link } from "react-router-dom";
import { Button } from "../../Button";
import { motion } from "framer-motion";
import classes from "./AboutHeroSection.module.scss";

export const AboutHeroSection = () => {
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
        <div className={classes.AboutHeroSection}>
            <div className="container">
                <div className={classes.flex}>
                    <div className={classes.left}>
                        <motion.div
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            variants={animationVariants}
                            initial="initial"
                            whileInView="animate"
                            className={classes.bold}
                        >
                            ДАНИИЛ ЛОГВИНЕНКО
                        </motion.div>
                        <motion.div
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            variants={animationVariants}
                            initial="initial"
                            whileInView="animate"
                            className={classes.subtitle}
                        >
                            Веб дизайнер и разработчик
                        </motion.div>
                        <motion.div
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            variants={animationVariants}
                            initial="initial"
                            whileInView="animate"
                        >
                            <Link to="/">
                                <Button className={classes.btn1}>Посмотреть проекты</Button>
                            </Link>
                        </motion.div>
                    </div>
                    <div className={classes.right}></div>
                    <motion.div
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        variants={animationVariants}
                        initial="initial"
                        whileInView="animate"
                    >
                        <Link to="/">
                            <Button className={classes.btn2}>Посмотреть проекты</Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
