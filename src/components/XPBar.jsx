import { motion } from "framer-motion";

function XPBar({ level = 14, progress = 72 }) {
    return (
        <div className="xp-container">
            <div className="xp-level">
                LEVEL {level}
            </div>

            <div className="xp-bar">
                <motion.div
                    className="xp-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut"
                    }}
                />
            </div>

            <div className="xp-label">
                {progress}% XP
            </div>
        </div>
    );
}

export default XPBar;