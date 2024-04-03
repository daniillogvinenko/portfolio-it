import { useEffect } from "react";
import { HeroSection } from "../../../components/HeroSection";
import { ProjectList } from "../../../components/ProjectList";
import { Skills } from "../../../components/Skills";
import classes from "./MainPage.module.scss";

export const MainPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    });

    return (
        <div className={classes.MainPage}>
            <HeroSection />
            <Skills />
            <ProjectList />
        </div>
    );
};
