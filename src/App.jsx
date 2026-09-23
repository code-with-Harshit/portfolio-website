import Navbar from "./components/Navbar";

import Spawn from "./sections/Spawn";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import LearningJourney from "./sections/LearningJourney";
import Quests from "./sections/Quests";
import Contact from "./sections/Contact";

function App() {
    return (
        <div className="portfolio">
            <Navbar />

            <main>
                <Spawn />
                <About />
                <Skills />
                <Projects />
                <LearningJourney />
                <Quests />
                <Contact />
            </main>
        </div>
    );
}

export default App;