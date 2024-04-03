import { HeroSection } from "../../../components/HeroSection";
import { ProjectList } from "../../../components/ProjectList";
import { Skills } from "../../../components/Skills";
import classes from "./MainPage.module.scss";

export const MainPage = () => {
    return (
        <div className={classes.MainPage}>
            <HeroSection />
            <Skills />
            <ProjectList />
        </div>
    );
};
