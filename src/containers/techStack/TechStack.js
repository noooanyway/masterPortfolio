import { Icon } from "@iconify/react";
import "./TechStack.css";

const TechStack = ({ theme, data }) => (
  <div className="tech-stack-section" style={{ background: theme.body }}>
    <h2
      style={{ color: theme.text, textAlign: "center", margin: "40px 0 16px" }}
    >
      {data.title}
    </h2>
    <div className="tech-icons-container">
      {data.stack.map((item, idx) => (
        <div className="tech-icon" key={idx}>
          <Icon
            icon={item.iconifyClassname}
            width="40"
            height="40"
            style={{ color: theme.text }}
          />
          <span style={{ color: theme.secondaryText, fontSize: "0.8rem" }}>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TechStack;
