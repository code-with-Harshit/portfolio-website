import { motion } from "framer-motion";
import { quests } from "../data/quests";

const Quests = () => {
    return (
        <section id="quests" className="quests-section">

            {/* XP → QUESTS transition */}
            <div className="quests-transition">
                <span></span>
                <div>✦</div>
                <span></span>
            </div>

            <div className="quests-container">

                {/* Section Heading */}
                <motion.div
                    className="quests-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="section-eyebrow">
                        ADVENTURE LOG
                    </p>

                    <h2>
                        QUEST BOARD
                    </h2>

                    <p className="quests-subtitle">
                        Current objectives, active projects and areas
                        I'm exploring.
                    </p>
                </motion.div>


                {/* Quest Board */}
                <div className="quest-board">

                    {/* Decorative top beam */}
                    <div className="quest-board-top"></div>

                    {/* Quest Cards */}
                    <div className="quests-grid">

                        {quests.map((quest, index) => (
                            <motion.article
                                key={quest.id}
                                className={`quest-card quest-${quest.type
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}

                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                viewport={{
                                    once: true,
                                    amount: 0.2
                                }}

                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.12
                                }}

                                whileHover={{
                                    y: -6
                                }}
                            >

                                {/* Quest Header */}
                                <div className="quest-header">

                                    <div className="quest-icon">
                                        {quest.icon}
                                    </div>

                                    <div className="quest-type">
                                        {quest.type}
                                    </div>

                                </div>


                                {/* Quest Content */}
                                <div className="quest-content">

                                    <h3>
                                        {quest.title}
                                    </h3>

                                    <p className="quest-description">
                                        {quest.description}
                                    </p>


                                    {/* Progress */}
                                    <div className="quest-progress-section">

                                        <div className="quest-progress-label">
                                            <span>
                                                PROGRESS
                                            </span>

                                            <span>
                                                {quest.progress}%
                                            </span>
                                        </div>

                                        <div className="quest-progress-bar">
                                            <div
                                                className="quest-progress-fill"
                                                style={{
                                                    width: `${quest.progress}%`
                                                }}
                                            ></div>
                                        </div>

                                    </div>


                                    {/* Skills */}
                                    <div className="quest-skills">

                                        {quest.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="quest-skill"
                                            >
                                                {skill}
                                            </span>
                                        ))}

                                    </div>

                                </div>


                                {/* Quest Footer */}
                                <div className="quest-footer">

                                    <span className="quest-status">
                                        ● {quest.status}
                                    </span>

                                    <span className="quest-number">
                                        QUEST {String(index + 1).padStart(2, "0")}
                                    </span>

                                </div>

                            </motion.article>
                        ))}

                    </div>

                </div>


                {/* Bottom decoration */}
                <motion.div
                    className="quests-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <span>⚔</span>
                    <p>
                        COMPLETE QUESTS. GAIN XP. BUILD THE WORLD.
                    </p>
                    <span>⚔</span>
                </motion.div>

            </div>

        </section>
    );
};

export default Quests;