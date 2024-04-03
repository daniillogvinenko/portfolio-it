import { Tag } from "../../../components/Tag";
import classes from "./ProjectPage1.module.scss";
import img1 from "../../../assets/images/projectPage1/1.png";
import img2 from "../../../assets/images/projectPage1/2.png";
import img3 from "../../../assets/images/projectPage1/3.png";
import img4 from "../../../assets/images/projectPage1/4.png";
import img5 from "../../../assets/images/projectPage1/5.png";
import img6 from "../../../assets/images/projectPage1/6.png";
import img7 from "../../../assets/images/projectPage1/7.png";
import img8 from "../../../assets/images/projectPage1/8.png";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const ProjectPage1 = () => {
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

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className={classes.ProjectPage1}>
            <div className="container">
                <div className={classes.title}>Кибержесть</div>
                <motion.div
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                    className={classes.tagFlex}
                >
                    <Tag>Figma</Tag>
                    <Tag>Adobe Illustrator</Tag>
                </motion.div>
                <motion.p
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ delay: 0.5 }}
                >
                    Разработка дизайна интернет-магазина для компании, занимающейся сборкой ПК и производством корпусов
                    столов <br />
                    <br /> Сайт предоставляет пользователям возможность покупки как стандартных компьютеров, так и
                    возможность создать свою сборку с нуля.
                    <br />
                    <br /> Год реализации проекта - 2023
                </motion.p>
                <motion.div
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                    className={classes.title}
                >
                    Команда
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                    className={classes.name}
                >
                    Дарья Хворостян
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                    className={classes.name}
                >
                    Соболев Максим
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                    className={classes.name}
                >
                    Горохов Олег
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                    className={classes.name}
                >
                    Полуянова Елизавета
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                    className={classes.name}
                >
                    Габараев Арсен
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                    className={classes.name}
                >
                    Михалева Ася
                </motion.div>
                <div className={classes.images}>
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
                        <img src={img2} alt="" />
                    </div>
                    <div className={classes.right}>
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
                        <motion.img
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            variants={imageAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            src={img7}
                            alt=""
                        />
                        <motion.img
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            variants={imageAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            src={img8}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={classes.separator} />
        </div>
    );
};
