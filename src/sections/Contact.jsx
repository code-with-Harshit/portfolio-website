import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="contact-section">

            {/* Quest → End Portal transition */}
            <div className="contact-transition">
                <span></span>
                <div>✦</div>
                <span></span>
            </div>

            <div className="contact-container">

                <motion.div
                    className="contact-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="section-eyebrow">THE END</p>

                    <h2>ENTER THE PORTAL</h2>

                    <p>
                        Let's connect, collaborate and build something new.
                    </p>
                </motion.div>


                <motion.div
                    className="contact-panel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >

                    <a
                        href="mailto:your-email@example.com"
                        className="contact-item"
                    >
                        <span>✉</span>
                        <div>
                            <small>EMAIL</small>
                            <strong>soodharshit2021@gmail.com</strong>
                        </div>
                    </a>

                    <a
                        href="https://github.com/code-with-Harshit"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-item"
                    >
                        <span>◈</span>
                        <div>
                            <small>GITHUB</small>
                            <strong>github.com/Harshit Sood</strong>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/harshit-s-a25257258/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-item"
                    >
                        <span>in</span>
                        <div>
                            <small>LINKEDIN</small>
                            <strong>Connect with me</strong>
                        </div>
                    </a>

                </motion.div>

                <p className="contact-footer">
                    ✦ QUEST COMPLETE • KEEP BUILDING ✦
                </p>

            </div>

        </section>
    );
};

export default Contact;