// src/pages/contact/ContactComponent.jsx

import { Component } from "react";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button"; // Só para os links
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import TopButton from "../../components/topButton/TopButton";
import { contactPageData, greeting } from "../../portfolio.js";
import AddressImg from "./AddressImg";
import "./ContactComponent.css";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

export default class Contact extends Component {
  state = { showResumeOptions: false };

  toggleResumeOptions = () => {
    this.setState(({ showResumeOptions }) => ({
      showResumeOptions: !showResumeOptions,
    }));
  };

  render() {
    const { showResumeOptions } = this.state;
    const theme = this.props.theme;

    return (
      <div className="contact-main">
        <Header theme={theme} />

        <div className="basic-contact">
          {/* Contact Heading */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData.title}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData.description}
                </p>
                <SocialMedia theme={theme} />

                {/* botão nativo para mostrar as opções */}
                <div className="resume-btn-div">
                  <button
                    className="see-resume-button"
                    onClick={this.toggleResumeOptions}
                    style={{
                      background: theme.body,
                      color: theme.text,
                      border: `1px solid ${theme.text}`,
                      padding: "0.75rem 1.5rem",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginTop: "2rem", // ← aqui
                    }}
                  >
                    See My Resume
                  </button>
                </div>

                {showResumeOptions && (
                  <div className="resume-options">
                    {/* CV em Português */}
                    <a
                      href={greeting.resumeLinkPT}
                      download="CV-PT.pdf"
                      className="resume-option"
                      style={{
                        display: "inline-block",
                        marginRight: "1rem",
                        padding: "0.5rem 1rem",
                        border: `1px solid ${theme.text}`,
                        borderRadius: "4px",
                        color: theme.text,
                        textDecoration: "none",
                      }}
                    >
                      🇵🇹 Download CV (PT)
                    </a>

                    {/* CV em Inglês */}
                    <a
                      href={greeting.resumeLinkEN}
                      download="CV-EN.pdf"
                      className="resume-option"
                      style={{
                        display: "inline-block",
                        padding: "0.5rem 1rem",
                        border: `1px solid ${theme.text}`,
                        borderRadius: "4px",
                        color: theme.text,
                        textDecoration: "none",
                      }}
                    >
                      🇬🇧 Download CV (EN)
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Fade>

          {/* Address Section */}
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection.title}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection.subtitle}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection.title}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection.subtitle}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
