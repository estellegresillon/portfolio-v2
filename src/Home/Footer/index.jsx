import styled from "styled-components";

import SocialLinks from "./SocialLinks";

const Footer = () => (
  <FooterWrapper>
    <p>
      <a id="contact-section">Estelle Grésillon</a>
    </p>
    <p>ReactJs Front-end Developer</p>
    <p>estelle.gresillon@gmail.com</p>
    <SocialLinks />
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.div`
  align-items: flex-end;
  background: url(clouds5.jpeg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  font-size: 36px;
  font-weight: bolder;
  height: 65vh;
  justify-content: center;
  margin-top: 200px;
  width: 100vw;

  p {
    margin-bottom: 10px;
    margin-right: 10vw;
  }

  @media screen and (max-width: 820px) {
    background-attachment: unset;
    height: 100vh;
    font-size: 36px;
    margin-top: 0;

    p {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 520px) {
    font-size: 20px;
  }
`;
