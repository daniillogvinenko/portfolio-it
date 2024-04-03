import { useEffect } from "react";
import { AboutHeroSection } from "../../../components/AboutHeroSection";
import { AboutMeText } from "../../../components/AboutMeText";

export const AboutPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div>
            <AboutHeroSection />
            <AboutMeText />
        </div>
    );
};
