import { Header } from "../../../components/Header/ui/Header";
import { Tag } from "../../../components/Tag";
import classes from "./ProjectPage3.module.scss";
import img1 from "../../../assets/images/projectPage3/1.png";
import img2 from "../../../assets/images/projectPage3/2.png";
import img3 from "../../../assets/images/projectPage3/3.png";
import img4 from "../../../assets/images/projectPage3/4.png";
import { Footer } from "../../../components/Footer";

export const ProjectPage3 = () => {
    return (
        <div className={classes.ProjectPage3}>
            <Header />
            <div className="container">
                <div className={classes.title}>SoundWave</div>
                <div className={classes.tagFlex}>
                    <Tag>Figma</Tag>
                    <Tag>Adobe Illustrator</Tag>
                    <Tag>React</Tag>
                    <Tag>Zustand</Tag>
                    <Tag>TypeScript</Tag>
                    <Tag>SCSS</Tag>
                    <Tag>Vite</Tag>
                </div>
                <p>
                    Разработка приложения для прослушивания музыки.
                    <br />
                    <br /> Год реализации проекта - 2023
                </p>
                <div className={classes.images}>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
            </div>
            <div className={classes.separator} />
            <Footer />
        </div>
    );
};
