import { Component } from "react";
import try1 from "../../assets/images/try1.png"; // ajusta o caminho se necessário

export default class CloudInfraImg extends Component {
  render() {
    // podes continuar a receber o theme se precisares de aplicar estilos condicionais
    const theme = this.props.theme;
    return (
      <img
        src={try1}
        alt="Cloud Infrastructure Illustration"
        style={{
          width: "100%", // ajusta conforme desejado
          height: "auto",
          display: "block",
          margin: "0 auto",
          // se quiseres usar alguma cor do tema como borda, podes fazer:
          // border: `2px solid ${theme.imageHighlight}`
        }}
      />
    );
  }
}
