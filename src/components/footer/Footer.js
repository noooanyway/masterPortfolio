import { Fade } from "react-reveal";
import "./Footer.css";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p
          className="footer-text"
          style={{ color: props.theme.secondaryText }}
        ></p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
