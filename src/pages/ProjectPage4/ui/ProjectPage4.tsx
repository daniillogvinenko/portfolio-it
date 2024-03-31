import { Header } from "../../../components/Header/ui/Header";
import { Tag } from "../../../components/Tag";
import classes from "./ProjectPage4.module.scss";
import img1 from "../../../assets/images/projectPage4/1.png";
import img2 from "../../../assets/images/projectPage4/2.png";
import img3 from "../../../assets/images/projectPage4/3.png";
import img4 from "../../../assets/images/projectPage4/4.png";
import img5 from "../../../assets/images/projectPage4/5.png";
import img6 from "../../../assets/images/projectPage4/6.png";
import { Footer } from "../../../components/Footer";

export const ProjectPage4 = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className={classes.title}>Addis Flavors</div>
                <div className={classes.tagFlex}>
                    <Tag>Figma</Tag>
                    <Tag>React</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>SCSS</Tag>
                    <Tag>Vite</Tag>
                </div>
                <p>
                    Разработка веб-сайта для ресторана эфиопской кухни
                    <br />
                    <br /> Год реализации проекта - 2023
                </p>
                <div className={classes.images}>
                    <div className={classes.left}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={classes.mid}>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                    <div className={classes.right}>
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                    </div>
                </div>
            </div>
            <div className={classes.separator} />
            <Footer />
        </div>
    );
};
