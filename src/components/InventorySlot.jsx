import { useState } from "react";

function InventorySlot({ skill }) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            className="inventory-item"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            tabIndex={0}
        >
            <div className="inventory-slot">
                <span className="inventory-icon">
                    {skill.icon}
                </span>
            </div>

            <span className="inventory-name">
                {skill.name}
            </span>

            {showTooltip && (
                <div className="skill-tooltip">
                    <div className="tooltip-title">
                        {skill.name}
                    </div>

                    <div className="tooltip-category">
                        {skill.category}
                    </div>

                    <div className="tooltip-divider" />

                    <p>
                        {skill.description}
                    </p>

                    <div className="tooltip-status">
                        {skill.status}
                    </div>

                    <div className="tooltip-tags">
                        {skill.tags.map((tag) => (
                            <span key={tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default InventorySlot;