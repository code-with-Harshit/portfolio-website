import { motion } from "framer-motion";
import MinecraftButton from "../components/MinecraftButton";
import XPBar from "../components/XPBar";

function Spawn() {

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <section id="spawn" className="spawn-section">

            {/* Background atmosphere */}
            <div className="spawn-sky" />

            <div className="cloud cloud-one" />
            <div className="cloud cloud-two" />
            <div className="cloud cloud-three" />

            {/* Distant terrain */}
            <div className="mountains">
                <div className="mountain mountain-one" />
                <div className="mountain mountain-two" />
                <div className="mountain mountain-three" />
            </div>

            {/* Ground */}
            <div className="spawn-ground">
                <div className="grass-layer" />
                <div className="dirt-layer" />
            </div>

            {/* Decorative blocks */}
            <div className="floating-block block-one" />
            <div className="floating-block block-two" />
            <div className="floating-block block-three" />

            {/* Main content */}
            <motion.div
                className="spawn-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >

                <div className="spawn-badge">
                    ● PLAYER ONLINE
                </div>

                <p className="spawn-kicker">
                    WELCOME TO MY WORLD
                </p>

                <h1>
                    HARSHIT
                    <span>SOOD</span>
                </h1>

                <h2>
                    Computer Science Engineering Student
                </h2>

                <p className="spawn-description">
                    Building, learning and experimenting one project
                    at a time.
                </p>

                {/* Player status */}
                <motion.div
                    className="player-status"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >

                    <div className="health-row">
                        <span className="status-label">
                            HEALTH
                        </span>

                        <span className="hearts">
                            ♥ ♥ ♥ ♥ ♥
                        </span>
                    </div>

                    <XPBar
                        level={14}
                        progress={72}
                    />

                </motion.div>

                {/* Actions */}
                <div className="spawn-actions">

                    <MinecraftButton
                        onClick={() => scrollTo("about")}
                    >
                        ENTER WORLD
                    </MinecraftButton>

                    <MinecraftButton
                        onClick={() => scrollTo("projects")}
                        className="secondary-button"
                    >
                        VIEW BUILDS
                    </MinecraftButton>

                </div>

            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 8, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
            >
                ↓ EXPLORE
            </motion.div>

        </section>
    );
}

export default Spawn;