import { motion } from "framer-motion";
import { timeline } from "../data/timeline";

function LearningJourney() {
    return (
        <section id="learning" className="xp-section">

            <div className="xp-transition">
                <span className="xp-transition-line" />
                <span className="xp-transition-icon">✦</span>
                <span className="xp-transition-line" />
            </div>
            {/* Atmospheric particles */}
            <div className="xp-particles">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>

            <div className="xp-container">

                {/* Heading */}
                <div className="section-heading xp-heading">

                    <span className="section-eyebrow">
                        EXPERIENCE POINTS
                    </span>

                    <h2>
                        XP JOURNEY
                    </h2>

                    <p>
                        Every project, course and challenge
                        adds another block to the journey.
                    </p>

                </div>


                {/* Current level */}
                <motion.div
                    className="current-xp"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >

                    <div className="xp-level-info">

                        <span className="xp-level-number">
                            LEVEL 14
                        </span>

                        <span className="xp-level-title">
                            COMPUTER SCIENCE EXPLORER
                        </span>

                    </div>


                    <div className="large-xp-bar">

                        <div className="large-xp-fill" />

                    </div>


                    <div className="xp-progress-info">

                        <span>
                            CURRENT PROGRESS
                        </span>

                        <span>
                            72% XP
                        </span>

                    </div>

                </motion.div>


                {/* Journey */}
                <div className="journey">

                    <div className="journey-line" />

                    {timeline.map((entry, index) => (

                        <motion.article
                            key={entry.year}
                            className={`journey-entry ${
                                index % 2 === 0
                                    ? "journey-left"
                                    : "journey-right"
                            }`}
                            initial={{
                                opacity: 0,
                                y: 30
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true,
                                amount: 0.25
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08
                            }}
                        >

                            <div className="journey-node">
                                {index === timeline.length - 1
                                    ? "?"
                                    : "✦"}
                            </div>


                            <div className="journey-card">

                                <div className="journey-card-header">

                                    <span className="journey-year">
                                        {entry.year}
                                    </span>

                                    <span className={`journey-status ${
                                        entry.milestone === "IN PROGRESS"
                                            ? "active"
                                            : entry.milestone === "LOCKED"
                                                ? "locked"
                                                : ""
                                    }`}>
                                        {entry.milestone}
                                    </span>

                                </div>


                                <h3>
                                    {entry.title}
                                </h3>


                                <p>
                                    {entry.description}
                                </p>


                                <div className="journey-skills">

                                    {entry.skills.map((skill) => (
                                        <span key={skill}>
                                            {skill}
                                        </span>
                                    ))}

                                </div>

                            </div>

                        </motion.article>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default LearningJourney;