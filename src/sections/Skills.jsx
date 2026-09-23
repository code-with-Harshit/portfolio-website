import { skills } from "../data/skills";
import InventorySlot from "../components/InventorySlot";

function Skills() {
    return (
        <section id="skills" className="skills-section">

            <div className="skills-container">

                <div className="section-heading">

                    <span className="section-eyebrow">
                        PLAYER INVENTORY
                    </span>

                    <h2>
                        INVENTORY
                    </h2>

                    <p>
                        Tools, technologies and concepts
                        I'm learning and building with.
                    </p>

                </div>

                <div className="inventory-window">

                    <div className="inventory-header">
                        <span>INVENTORY</span>

                        <span className="inventory-count">
                            {skills.length} ITEMS
                        </span>
                    </div>

                    <div className="inventory-grid">

                        {skills.map((skill) => (
                            <InventorySlot
                                key={skill.name}
                                skill={skill}
                            />
                        ))}

                    </div>

                    <div className="inventory-footer">
                        <span>
                            Hover over an item to inspect
                        </span>

                        <span>
                            ◆ SELECT
                        </span>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;