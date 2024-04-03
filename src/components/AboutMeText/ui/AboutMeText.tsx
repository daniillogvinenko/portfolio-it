import { Link } from "react-router-dom";
import classes from "./AboutMeText.module.scss";
import { motion } from "framer-motion";

export const AboutMeText = () => {
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
        <div className={classes.AboutMeText}>
            <div className="container">
                <motion.div
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                    className={classes.title}
                >
                    Обо мне
                </motion.div>
                <motion.p
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    Привет. Меня зовут Даниил - я занимаюсь дизайном и разработкой уже почти 4 года. Мой основной род
                    деятельности - веб-дизайн. За время работы в этой сфере я успел сделать не один проект в сфере
                    дизайна, а также реализовать несколько полноценных веб-приложений.
                </motion.p>
                <motion.p
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    На данный момент я получаю высшее образование по направлению “Прикладная информатика в дизайне” в
                    СПБГУПТД, стараюсь активно повышать свою квалификацию, проходя платные и бесплатные курсы.
                </motion.p>
                <motion.p
                    viewport={{ once: true }}
                    variants={animationVariants}
                    initial="initial"
                    whileInView="animate"
                >
                    Если Вы хотите подробнее ознакомиться с моими работами, то переходите к{" "}
                    <Link className={classes.link} to="/">
                        списку проектов
                    </Link>
                    , там Вы увидите подробное описание моих наиболее успешных работ.
                </motion.p>
            </div>
        </div>
    );
};
