import { AboutHeroSection } from "../../../components/AboutHeroSection";
import { AboutMeText } from "../../../components/AboutMeText";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header/ui/Header";

export const AboutPage = () => {
    return (
        <div>
            <Header />
            <AboutHeroSection />
            <AboutMeText />
            <Footer />
        </div>
    );
};
