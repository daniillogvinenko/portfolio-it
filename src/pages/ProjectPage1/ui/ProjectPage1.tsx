import { Header } from "../../../components/Header/ui/Header";
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
import { Footer } from "../../../components/Footer";

export const ProjectPage1 = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className={classes.title}>Кибержесть</div>
                <div className={classes.tagFlex}>
                    <Tag>Figma</Tag>
                    <Tag>Adobe Illustrator</Tag>
                </div>
                <p>
                    Разработка дизайна интернет-магазина для компании, занимающейся сборкой ПК и производством корпусов
                    столов <br />
                    <br /> Сайт предоставляет пользователям возможность покупки как стандартных компьютеров, так и
                    возможность создать свою сборку с нуля.
                    <br />
                    <br /> Год реализации проекта - 2023
                </p>
                <div className={classes.title}>Команда</div>
                <div className={classes.name}>Дарья Хворостян</div>
                <div className={classes.name}>Соболев Максим</div>
                <div className={classes.name}>Горохов Олег</div>
                <div className={classes.name}>Полуянова Елизавета</div>
                <div className={classes.name}>Габараев Арсен</div>
                <div className={classes.name}>Михалева Ася</div>
                <div className={classes.images}>
                    <div className={classes.left}>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                    </div>
                    <div className={classes.right}>
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                        <img src={img7} alt="" />
                        <img src={img8} alt="" />
                    </div>
                </div>
            </div>
            <div className={classes.separator} />
            <Footer />
        </div>
    );
};
