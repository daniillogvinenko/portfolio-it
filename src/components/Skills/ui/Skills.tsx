import classes from "./Skills.module.scss";
import { motion } from "framer-motion";

export const Skills = () => {
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
        <div className={classes.Skills}>
            <motion.div
                viewport={{ once: true }}
                variants={animationVariants}
                initial="initial"
                whileInView="animate"
                className={classes.title}
            >
                Ключевые навыки
            </motion.div>
            <div className="container">
                <div className={classes.tableHeader}>
                    <motion.div
                        viewport={{ once: true }}
                        variants={animationVariants}
                        initial="initial"
                        whileInView="animate"
                    >
                        Дизайн
                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        variants={animationVariants}
                        initial="initial"
                        whileInView="animate"
                    >
                        Разработка
                    </motion.div>
                </div>
            </div>
            <div className={classes.tableDesktop}>
                <table>
                    <tbody>
                        <tr>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                Figma
                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                Adobe Illustrator
                            </motion.div>
                        </tr>
                        <tr>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                Adobe Photoshop
                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                Premiere Pro
                            </motion.div>
                        </tr>
                        <tr>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                React
                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                TypeScript
                            </motion.div>
                        </tr>
                        <tr>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                Redux
                            </motion.div>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                Jest
                            </motion.div>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.tableMobile}>
                <table>
                    <tbody>
                        <tr>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                Figma
                            </motion.div>
                        </tr>
                        <tr>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                Adobe Illustrator
                            </motion.div>
                        </tr>
                        <tr>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                Adobe Photoshop
                            </motion.div>
                        </tr>
                        <tr>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                Premiere Pro
                            </motion.div>
                        </tr>
                        <tr>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                TypeScript
                            </motion.div>
                        </tr>
                        <tr>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                React
                            </motion.div>
                        </tr>
                        <tr>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                Jest
                            </motion.div>
                        </tr>
                        <tr>
                            <motion.div
                                viewport={{ once: true }}
                                variants={animationVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                Redux
                            </motion.div>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
