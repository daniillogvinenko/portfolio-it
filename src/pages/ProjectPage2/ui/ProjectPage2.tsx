import { Header } from "../../../components/Header/ui/Header";
import { Tag } from "../../../components/Tag";
import classes from "./ProjectPage2.module.scss";
import img1 from "../../../assets/images/projectPage2/1.png";
import img2 from "../../../assets/images/projectPage2/2.png";
import img3 from "../../../assets/images/projectPage2/3.png";
import img4 from "../../../assets/images/projectPage2/4.png";
import img5 from "../../../assets/images/projectPage2/5.png";
import img6 from "../../../assets/images/projectPage2/6.png";
import img7 from "../../../assets/images/projectPage2/7.png";
import img8 from "../../../assets/images/projectPage2/8.png";
import { motion } from "framer-motion";

export const ProjectPage2 = () => {
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
        <div className={classes.ProjectPage2}>
            <Header />
            <div className="container">
                <div className={classes.title}>Горно-Алтайск</div>
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
                    Разработка приложения, позволяющего жителям Горно-Алтайска просматривать всю необходимую информацию.{" "}
                    <br />
                    <br /> Приложение позволяет пользователям просматривать карты, статьи и места, выставлять оценки,
                    прокладывать туристические маршруты.
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
                    Сергеев Артем
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
                        <motion.img
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            variants={imageAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            src={img2}
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
                    </div>
                    <div className={classes.right}>
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
