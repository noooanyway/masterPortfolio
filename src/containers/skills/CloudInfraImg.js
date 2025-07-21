// src/containers/cloudInfra/CloudInfraImg.jsx
import { Component } from "react";
// note o ReactComponent e a extensão .svg
import { ReactComponent as CloudSvg } from "../../assets/images/bugfix.svg";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <CloudSvg
          // define largura máxima e deixa a altura automática
          style={{
            width: "100%",
            maxWidth: "500px", // ajuste ao tamanho desejado
            height: "auto",
            // faz o SVG herdar a cor definida
            color: theme.text,
          }}
          // Se dentro do SVG você usar fill="currentColor",
          // ele vai pintar todas as paths com theme.text
        />
      </div>
    );
  }
}
