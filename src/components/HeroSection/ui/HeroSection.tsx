import { InterFont } from "../../InterFont/InterFont";
import classes from "./HeroSection.module.scss";
import { motion } from "framer-motion";

export const HeroSection = () => {
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
        <div className={classes.HeroSection}>
            <div className="container">
                <div className={classes.flex}>
                    <div className={classes.left}>
                        <motion.div
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            variants={animationVariants}
                            initial="initial"
                            whileInView="animate"
                            className={classes.name}
                        >
                            Привет, я Даниил
                        </motion.div>
                        <motion.div
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            variants={animationVariants}
                            initial="initial"
                            whileInView="animate"
                            className={classes.bold}
                        >
                            ВЕБ-ДИЗАЙНЕР<InterFont>/</InterFont> РАЗРАБОТЧИК
                        </motion.div>
                        <motion.div
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            variants={animationVariants}
                            initial="initial"
                            whileInView="animate"
                        >
                            Из Санкт-Петербурга
                        </motion.div>
                    </div>
                    <div className={classes.right}></div>
                </div>
            </div>
        </div>
    );
};
