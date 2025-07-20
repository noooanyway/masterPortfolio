// src/pages/projects/Projects.js
import { Component } from "react";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import { greeting } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    const projects = ProjectsData.data;

    return (
      <div className="projects-main">
        <Header theme={theme} />

        {/* Header da página */}
        <div className="basic-projects">
          <h1 style={{ color: theme.text }}>
            {projects.length > 0 ? "My Projects" : "No Projects Found"}
          </h1>
        </div>

        {/* Lista de links */}
        <ul className="projects-links-list" style={{ color: theme.text }}>
          {projects.map((proj) => (
            <li key={proj.id} style={{ margin: "0.5rem 0" }}>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.primary, textDecoration: "underline" }}
              >
                {proj.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão para ver mais no GitHub */}
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <Button
            text="More Projects"
            href={greeting.githubProfile}
            newTab={true}
            theme={theme}
          />
        </div>

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;
