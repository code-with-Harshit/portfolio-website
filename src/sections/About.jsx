import { motion } from "framer-motion";

function About() {
    return (
        <section id="about" className="about-section">

            <div className="about-container">

                {/* Section heading */}
                <div className="section-heading about-heading">

                  <span className="section-eyebrow">
                  ──────  • PLAYER PROFILE •  ──────
                  </span>

                </div>

                {/* Player Profile */}
                <div className="player-profile">

                    {/* Player visual */}
                    <motion.div
                        className="player-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className="player-card-header">
                            PLAYER
                        </div>

                        <div className="player-avatar">

                            <div className="avatar-head">
                                <span className="avatar-hair" />
                                <span className="avatar-face" />
                            </div>

                            <div className="avatar-body" />

                            <div className="avatar-legs">
                                <span />
                                <span />
                            </div>

                        </div>

                        <div className="player-name">
                            HARSHIT SOOD
                        </div>

                        <div className="player-class">
                            COMPUTER SCIENCE ENGINEERING
                        </div>

                        <div className="player-status-badge">
                            ● CURRENTLY BUILDING
                        </div>

                    </motion.div>


                    {/* About information */}
                    <motion.div
                        className="about-info"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className="about-panel">

                            <div className="about-panel-title">
                                ABOUT THE PLAYER
                            </div>

                            <p>
                                I'm a third-year Computer Science
                                Engineering student who enjoys turning
                                what I learn into practical projects.
                            </p>

                            <p>
                                My journey has taken me from building
                                basic websites to exploring software
                                development, data structures, databases,
                                AI/ML and IoT.
                            </p>

                            <p>
                                I'm particularly interested in learning
                                by building, experimenting with new
                                technologies and improving my problem
                                solving skills along the way.
                            </p>

                        </div>


                        {/* Player stats */}
                        <div className="player-stats">

                            <div className="stat-item">
                                <span className="stat-icon">
                                    🎓
                                </span>

                                <div>
                                    <span className="stat-label">
                                        YEAR
                                    </span>

                                    <strong>
                                        3rd Year
                                    </strong>
                                </div>
                            </div>


                            <div className="stat-item">
                                <span className="stat-icon">
                                    💻
                                </span>

                                <div>
                                    <span className="stat-label">
                                        FOCUS
                                    </span>

                                    <strong>
                                        Software Development
                                    </strong>
                                </div>
                            </div>


                            <div className="stat-item">
                                <span className="stat-icon">
                                    🧠
                                </span>

                                <div>
                                    <span className="stat-label">
                                        EXPLORING
                                    </span>

                                    <strong>
                                        AI / ML
                                    </strong>
                                </div>
                            </div>


                            <div className="stat-item">
                                <span className="stat-icon">
                                    ⚙
                                </span>

                                <div>
                                    <span className="stat-label">
                                        BUILDING
                                    </span>

                                    <strong>
                                        Web + IoT
                                    </strong>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default About;