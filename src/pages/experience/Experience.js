import { Component } from "react";
import { Fade } from "react-reveal";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import TechStack from "../../containers/techStack/TechStack";
import { experience, techStack } from "../../portfolio.js";
import "./Experience.css";
import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />

        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience.subtitle}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <ExperienceAccordion sections={experience.sections} theme={theme} />

        {/* My Websites Section */}
        <div className="websites-section">
          <Fade bottom duration={2000} distance="40px">
            <h2 className="websites-heading" style={{ color: theme.text }}>
              My Websites
            </h2>
            <ul className="websites-list">
              <li className="website-item">
                <a
                  href="https://tiratulhos.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.secondaryText }}
                >
                  tiratulhos.pt
                </a>
              </li>
              <li
                className="website-item"
                style={{ border: `1px solid ${theme.text}` }}
              >
                <a
                  href="http://www.jaservicos24h.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.secondaryText }}
                >
                  jaservicos24h.pt
                </a>
              </li>{" "}
            </ul>
          </Fade>
        </div>

        {/* My Stack Section */}
        <TechStack theme={theme} data={techStack} />

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Experience;
