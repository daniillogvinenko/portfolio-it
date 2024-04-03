import { Header } from "../../../components/Header/ui/Header";
import { Tag } from "../../../components/Tag";
import classes from "./ProjectPage3.module.scss";
import img1 from "../../../assets/images/projectPage3/1.png";
import img2 from "../../../assets/images/projectPage3/2.png";
import img3 from "../../../assets/images/projectPage3/3.png";
import img4 from "../../../assets/images/projectPage3/4.png";
import img5 from "../../../assets/images/projectPage3/5.png";
import { motion } from "framer-motion";

export const ProjectPage3 = () => {
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
        <div className={classes.ProjectPage3}>
            <Header />
            <div className="container">
                <div className={classes.title}>SoundWave</div>
                <motion.div
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                    className={classes.tagFlex}
                >
                    <Tag>Figma</Tag>
                    <Tag>Adobe Illustrator</Tag>
                    <Tag>React</Tag>
                    <Tag>Zustand</Tag>
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
                    Разработка приложения для прослушивания музыки.
                    <br />
                    <br /> Год реализации проекта - 2023
                </motion.p>
                <div className={classes.images}>
                    <p>Прототипы</p>
                    <motion.img
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        variants={imageAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        className={classes.uiKitImg}
                        src={img5}
                        alt=""
                    />

                    <p>Экраны приложения</p>
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
            </div>
            <div className={classes.separator} />
        </div>
    );
};
