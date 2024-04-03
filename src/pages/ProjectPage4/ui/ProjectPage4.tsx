import { Tag } from "../../../components/Tag";
import classes from "./ProjectPage4.module.scss";
import img1 from "../../../assets/images/projectPage4/1.png";
import img2 from "../../../assets/images/projectPage4/2.png";
import img3 from "../../../assets/images/projectPage4/3.png";
import img4 from "../../../assets/images/projectPage4/4.png";
import img5 from "../../../assets/images/projectPage4/5.png";
import img6 from "../../../assets/images/projectPage4/6.png";
import { motion } from "framer-motion";

export const ProjectPage4 = () => {
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

    const imageAnimationVariants = {
        initial: {
            opacity: 0,
        },

        animate: {
            opacity: 1,
        },
    };

    return (
        <div className={classes.ProjectPage4}>
            <div className="container">
                <div className={classes.title}>Addis Flavors</div>
                <motion.div
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                    className={classes.tagFlex}
                >
                    <Tag>Figma</Tag>
                    <Tag>React</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>SCSS</Tag>
                    <Tag>Vite</Tag>
                </motion.div>
                <motion.p
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ delay: 0.5 }}
                >
                    Разработка веб-сайта для ресторана эфиопской кухни
                    <br />
                    <br /> Год реализации проекта - 2023
                </motion.p>
                <div className={classes.images}>
                    <p>Экраны приложения</p>
                    <div className={classes.imagesFlex}>
                        <div className={classes.left}>
                            <motion.img
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                variants={imageAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                src={img1}
                                alt=""
                            />
                        </div>
                        <div className={classes.mid}>
                            <motion.img
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                variants={imageAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                src={img2}
                                alt=""
                            />
                            <motion.img
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                variants={imageAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                src={img3}
                                alt=""
                            />
                            <motion.img
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                variants={imageAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                src={img4}
                                alt=""
                            />
                        </div>
                        <div className={classes.right}>
                            <motion.img
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                variants={imageAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                src={img5}
                                alt=""
                            />
                            <motion.img
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                variants={imageAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                src={img6}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.separator} />
        </div>
    );
};
