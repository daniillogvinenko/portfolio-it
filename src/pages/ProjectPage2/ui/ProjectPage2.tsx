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
import { Footer } from "../../../components/Footer";

export const ProjectPage2 = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className={classes.title}>Горно-Алтайск</div>
                <div className={classes.tagFlex}>
                    <Tag>Figma</Tag>
                    <Tag>Adobe Illustrator</Tag>
                </div>
                <p>
                    Разработка приложения, позволяющего жителям Горно-Алтайска просматривать всю необходимую информацию.{" "}
                    <br />
                    <br /> Приложение позволяет пользователям просматривать карты, статьи и места, выставлять оценки,
                    прокладывать туристические маршруты.
                    <br />
                    <br /> Год реализации проекта - 2023
                </p>
                <div className={classes.title}>Команда</div>
                <div className={classes.name}>Дарья Хворостян</div>
                <div className={classes.name}>Соболев Максим</div>
                <div className={classes.name}>Горохов Олег</div>
                <div className={classes.name}>Сергеев Артем</div>
                <div className={classes.name}>Габараев Арсен</div>
                <div className={classes.name}>Михалева Ася</div>
                <div className={classes.images}>
                    <div className={classes.left}>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                    </div>
                    <div className={classes.mid}>
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                    </div>
                    <div className={classes.right}>
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
