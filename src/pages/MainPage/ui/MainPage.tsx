import { Header } from "../../../components/Header/ui/Header";
import { HeroSection } from "../../../components/HeroSection";
import { ProjectList } from "../../../components/ProjectList";
import { Skills } from "../../../components/Skills";
import classes from "./MainPage.module.scss";

export const MainPage = () => {
    return (
        <div className={classes.MainPage}>
            <Header />
            <HeroSection />
            <Skills />
            <ProjectList />
        </div>
    );
};
