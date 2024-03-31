import { Header } from "../../../components/Header/ui/Header";
import { Tag } from "../../../components/Tag";
import classes from "./ProjectPage5.module.scss";
import img1 from "../../../assets/images/projectPage5/1.png";
import img2 from "../../../assets/images/projectPage5/2.png";
import img3 from "../../../assets/images/projectPage5/3.png";
import img4 from "../../../assets/images/projectPage5/4.png";
import img5 from "../../../assets/images/projectPage5/5.png";
import { Footer } from "../../../components/Footer";

export const ProjectPage5 = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className={classes.title}>PProjects</div>
                <div className={classes.tagFlex}>
                    <Tag>Figma</Tag>
                    <Tag>React</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>RTK</Tag>
                    <Tag>RTK Query</Tag>
                    <Tag>Webpack</Tag>
                </div>
                <p>
                    Разработка приложения, позволяющего начинающим разработчикам искать идеи для своих проектов
                    <br />
                    <br /> Год реализации проекта - 2023
                </p>
                <div className={classes.images}>
                    <div className={classes.left}>
                        <img src={img1} alt="" />
                        <img src={img3} alt="" />
                    </div>
                    <div className={classes.mid}>
                        <img src={img2} alt="" />
                    </div>
                    <div className={classes.right}>
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                    </div>
                </div>
            </div>
            <div className={classes.separator} />
            <Footer />
        </div>
    );
};
