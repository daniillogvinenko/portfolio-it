import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectPage1 } from "./pages/ProjectPage1";
import { ProjectPage2 } from "./pages/ProjectPage2";
import { ProjectPage3 } from "./pages/ProjectPage3";
import { ProjectPage4 } from "./pages/ProjectPage4";
import { ProjectPage5 } from "./pages/ProjectPage5";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/project/1" element={<ProjectPage1 />} />
                <Route path="/project/2" element={<ProjectPage2 />} />
                <Route path="/project/3" element={<ProjectPage3 />} />
                <Route path="/project/4" element={<ProjectPage4 />} />
                <Route path="/project/5" element={<ProjectPage5 />} />
            </Routes>
        </>
    );
}

export default App;
