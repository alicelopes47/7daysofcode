import "./AssinaturaNewsletter.css";
import AssinaturaImage from "../../../assets/imagem-hero 1.png";
import { RegularButton, FormInput } from '../../atoms/atoms'

export const AssinaturaNewsletter = () => {
  return (
    <div className="assinatura-container">
      <div className="assinatura-informations">
        <h6>Sua casa com as </h6>
        <h1>melhores plantas</h1>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
        <form className="newsletter-form">
          <FormInput placeholder="Insira seu e-mail" type="email" />
          <RegularButton label="Assinar newsletter" />
        </form>
      </div>
      <img
        className="assinatura-image"
        src={AssinaturaImage}
        alt="Logo da Alura"
      />
    </div>
  );
};
