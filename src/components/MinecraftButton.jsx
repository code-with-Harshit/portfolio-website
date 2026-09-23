import { motion } from "framer-motion";

function MinecraftButton({ children, onClick, href, className = "" }) {
    const buttonContent = (
        <motion.span
            whileHover={{ y: -2 }}
            whileTap={{ y: 2 }}
            className={`minecraft-button ${className}`}
        >
            {children}
        </motion.span>
    );

    if (href) {
        return (
            <a href={href} className="minecraft-button-link">
                {buttonContent}
            </a>
        );
    }

    return (
        <button className="minecraft-button-wrapper" onClick={onClick}>
            {buttonContent}
        </button>
    );
}

export default MinecraftButton;